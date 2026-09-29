/**
 * Pure-observer诊断插件（放到你自己的真实项目里用，不要放进复现仓库的 vite.config.ts）。
 *
 * 用法：在真实项目的 vite.config.ts 里
 *
 *   import { hmrObserver, payloadObserver } from './scripts/diagnostic-plugin'
 *
 *   export default defineConfig({
 *     plugins: [
 *       hmrObserver('before-vue'),
 *       vue(),
 *       hmrObserver('after-vue', { order: 'post' }),
 *       payloadObserver(),          // 可选：把真正发给浏览器的 HMR payload 打出来
 *     ],
 *   })
 *
 * 三个插件都只“看”，不返回值、不改 modules、不发自定义事件，所以不会改变 HMR 行为。
 *
 * 这里打印的信息是为了回答这些问题：
 *   1. before-vue 与 after-vue 的 modules 差在哪？（plugin-vue 过滤掉了什么）
 *   2. 每个 ModuleNode 有没有 `_clientModule` / `_ssrModule`？
 *      Vite 8 的 legacy 路径会把 handleHotUpdate 返回的模块用
 *      `mod._clientModule` 重新映射到 client environment，映射不到的会被 `.filter(Boolean)`
 *      静默丢掉 —— 这正是“/src/... 从 client payload 里消失、只剩 /@fs/...”的机制。
 *   3. 同一个文件是否存在**两个不同 id** 的 ModuleNode（例如 /src/... 与 /@fs/...、
 *      或大小写/软链接导致的两种绝对路径）？这通常来自某个插件/SSR 侧用绝对路径加载过该文件。
 *   4. client / ssr 两个 environment 各自的模块列表是什么？
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
    // ↓ 关键字段：Vite 8 用它们把 mixed/legacy 模块重新映射到各 environment
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
      `\n  duplicate id detected: ${new Set(ids).size !== ids.length ? 'YES ← 同一文件有多个不同 id 的 ModuleNode' : 'no'}`,
      `\n  environment names: ${JSON.stringify(Object.keys(ctx.server.environments))}`,
      `\n  client env modules: ${JSON.stringify((envNodesForFile(ctx.server, 'client', ctx.file) ?? []).map((n) => n.url))}`,
      `\n  ssr env modules:    ${JSON.stringify((envNodesForFile(ctx.server, 'ssr', ctx.file) ?? []).map((n) => n.url))}`,
      `\n  module detail: ${JSON.stringify(ctx.modules.map((m) => nodeInfo(m, 'legacy')), null, 2)}`,
    )
  }

  // 只有 Vite 7/8 的 legacy hook 支持 object form（order）。
  // 用 order: 'post' 可以保证在 vue() 过滤之后再观察最终结果。
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
 * 把真正推给浏览器（client environment 的 hot channel）的 payload 打出来。
 * 只包一层 send，1:1 转发，不改变行为。
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

/** 顺带把“这个文件在我的项目里到底被哪些路径加载过”打出来（排查 /@fs/ 重复节点用）。 */
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
