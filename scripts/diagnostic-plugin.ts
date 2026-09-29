/**
 * Pure-observer diagnostics for *your own* project (do not add these to this repro repo's
 * vite.config.ts — the repro must stay minimal).
 *
 * Usage, in the config of your real project:
 *
 *   import { hmrObserver, payloadObserver } from './scripts/diagnostic-plugin'
 *
 *   export default defineConfig({
 *     plugins: [
 *       hmrObserver('before-vue'),
 *       vue(),
 *       hmrObserver('after-vue', { order: 'post' }),
 *       payloadObserver(),          // optional: print the HMR payload sent to the browser
 *     ],
 *   })
 *
 * All three plugins only observe: they return nothing, do not modify `modules`, and do not
 * emit custom events, so they cannot change HMR behaviour.
 *
 * They answer these questions:
 *   1. How do the `before-vue` and `after-vue` module lists differ (what did plugin-vue filter out)?
 *   2. Does every ModuleNode have `_clientModule` / `_ssrModule`? Vite 8's legacy path remaps the
 *      modules returned by `handleHotUpdate` onto the client environment via `mod._clientModule`,
 *      and silently drops the ones it cannot map with `.filter(Boolean)` — that is exactly the
 *      mechanism behind "/src/... disappears from the client payload, only /@fs/... is left".
 *   3. Are there two ModuleNodes with *different ids* for the same file (e.g. /src/... and
 *      /@fs/..., or two absolute paths from casing/symlinks)? That usually means a plugin or the
 *      SSR side loaded the file through an absolute path.
 *   4. What do the client and ssr environment module lists look like?
 *
 */

import path from 'node:path'
import type { HmrContext, ModuleNode, Plugin, ViteDevServer } from 'vite'

function nodeInfo(node: ModuleNode, envHint: string) {
  return {
    envHint,
    url: node.url,
    id: node.id,
    type: node.type,
    file: node.file,
    isSelfAccepting: node.isSelfAccepting,
    lastHMRTimestamp: (node as any).lastHMRTimestamp,
    lastInvalidationTimestamp: (node as any).lastInvalidationTimestamp,
// key fields: Vite 8 uses them to remap mixed/legacy nodes onto each environment
    clientModuleUrl: (node as any)._clientModule?.url ?? null,
    ssrModuleUrl: (node as any)._ssrModule?.url ?? null,
    imported: [...node.importedModules].map((m) => m.url),
    importers: [...node.importers].map((m) => m.url),
    acceptedHmrDeps: [...node.acceptedHmrDeps].map((m) => m.url),
    acceptedHmrExports: node.acceptedHmrExports ? [...node.acceptedHmrExports] : null,
  }
}

function envNodesForFile(server: ViteDevServer, envName: string, file: string) {
  const env = (server.environments as Record<string, any>)[envName]
  if (!env) return null
  const nodes = env.moduleGraph.getModulesByFile(file.replace(/\\/g, '/'))
  return [...(nodes ?? [])].map((n) => nodeInfo(n as ModuleNode, envName))
}

export function hmrObserver(name: string, options: { order?: 'pre' | 'post' } = {}): Plugin {
  const print = (ctx: HmrContext) => {
    const mixedByFile = [...(ctx.server.moduleGraph.getModulesByFile(ctx.file) ?? [])]
    const ids = mixedByFile.map((m) => m.id)
    console.log(
      `\n[OBSERVER ${name}] ${new Date().toLocaleTimeString()} timestamp=${ctx.timestamp}`,
      `\n  file:            ${ctx.file}`,
      `\n  modules(legacy): ${JSON.stringify(ctx.modules.map((m) => m.url))}`,
      `\n  distinct ids for this file (duplicate-node check): ${JSON.stringify([...new Set(ids)])}`,
`\n  duplicate id detected: ${new Set(ids).size !== ids.length ? 'YES (multiple ModuleNodes with different ids for one file)' : 'no'}`,
      `\n  environment names: ${JSON.stringify(Object.keys(ctx.server.environments))}`,
      `\n  client env modules: ${JSON.stringify((envNodesForFile(ctx.server, 'client', ctx.file) ?? []).map((n) => n.url))}`,
      `\n  ssr env modules:    ${JSON.stringify((envNodesForFile(ctx.server, 'ssr', ctx.file) ?? []).map((n) => n.url))}`,
      `\n  module detail: ${JSON.stringify(ctx.modules.map((m) => nodeInfo(m, 'legacy')), null, 2)}`,
    )
  }

// Only Vite 7/8 legacy hooks support the object form (order).
// order: 'post' makes sure we observe the final list, i.e. after vue() filtered it.
  if (options.order) {
    return {
      name: `diagnostic-hmr-${name}`,
      handleHotUpdate: { order: options.order, handler: print },
    } as Plugin
  }
  return {
    name: `diagnostic-hmr-${name}`,
    handleHotUpdate: print as any,
  } as Plugin
}

/**
 * Print the payload that is really pushed to the browser (the client environment hot channel).
 * It only wraps `send` and forwards 1:1, so behaviour is unchanged.
 */
export function payloadObserver(): Plugin {
  return {
    name: 'diagnostic-hmr-payload',
    configureServer(server) {
      for (const [envName, env] of Object.entries(server.environments as Record<string, any>)) {
        const hot = env.hot
        if (!hot?.send) continue
        const original = hot.send.bind(hot)
        hot.send = (payload: any) => {
          if (payload?.type === 'update' || payload?.type === 'full-reload' || payload?.type === 'error') {
            console.log(
              `[OBSERVER payload:${envName}] ${payload.type} ${JSON.stringify(
                payload.type === 'update' ? payload.updates.map((u: any) => u.path) : payload.path,
              )}`,
            )
          }
          return original(payload)
        }
      }
    },
  } as Plugin
}

/** Also report every url this file was loaded through (helps find /@fs/ duplicate nodes). */
export function fileUrlReporter(file: string): Plugin {
  const normalized = file.replace(/\\/g, '/')
  return {
    name: 'diagnostic-file-urls',
    configureServer(server) {
      setInterval(() => {
        const envs = server.environments as Record<string, any>
        const rows: string[] = []
        for (const [envName, env] of Object.entries(envs)) {
          for (const node of env.moduleGraph.urlToModuleMap.values()) {
            if (node.id === normalized) rows.push(`${envName} ${node.url}`)
          }
        }
        if (rows.length > 1) console.log(`[OBSERVER urls] ${path.basename(file)}:\n  ${rows.join('\n  ')}`)
      }, 2000).unref?.()
    },
  } as Plugin
}

export default hmrObserver
