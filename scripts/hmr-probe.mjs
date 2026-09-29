#!/usr/bin/env node
/**
 * Automated HMR probe for the "Vite 8 + Vue 3, repeated edits of one SFC" report.
 *
 * It boots the very same dev server as `npm run dev` (./vite.config.ts), behaves
 * like a browser (HTTP requests for the entry HTML and for every imported module),
 * connects a real HMR WebSocket client, and then performs N consecutive edits of a
 * Vue SFC on disk.
 *
 * For every edit it records:
 *   - modules seen by the [DEBUG HMR before-vue] plugin  (mixed module graph)
 *   - modules seen by the [DEBUG HMR after-vue]  plugin  (after plugin-vue filtered)
 *   - the `client` / `ssr` environment module list for that file
 *   - the real client HMR payload received over the WebSocket (browser truth),
 *     cross-checked against the payload pushed into the client environment
 *   - the lines Vite's own logger prints (`[vite] (client) hmr update ...`)
 *
 * Usage:
 *   npm run probe           # 15 template edits (normal small edits)
 *   npm run probe:style     # 12 <style scoped> edits
 *   npm run probe:big       # big template: comment / uncomment the large block
 *   npm run probe:big:fast  # big template + non-atomic save + burst -> reproduces
 *   npm run probe:big:fix   # same, with awaitWriteFinish -> all green
 *   npm run probe:debug     # 4 edits with DEBUG=vite:hmr
 *
 * Flags:
 *   --edits=N            number of consecutive edits             (default: 15)
 *   --mode=template|style|script|both|cycle|toggle               (default: template)
 *                        toggle = comment / uncomment the big
 *                        `<!-- <div id="toggle-block"> … </div> -->` block in the
 *                        490KB generated template (see README)
 *   --gap=MS             pause between two edits                 (default: 400)
 *   --settle=MS          max wait for a payload after an edit    (default: 5000)
 *   --retry=N            re-save an edit until HMR reacts        (default: 3)
 *   --write-mode=direct|replace|chunked
 *                        how the harness saves the file:
 *                        direct  = fs.writeFile (truncate + write)
 *                        replace = write a temp file, then rename over the target
 *                                  (atomic save, what several editors do)
 *                        chunked = write the file in two chunks with a pause in
 *                                  between (the file is briefly incomplete on disk)
 *   --chunk-delay=MS     pause inside --write-mode=chunked        (default: 15)
 *   --verify-fetch=false  skip the "what would the browser re-fetch get" check
 *   --prime=false        skip the watcher priming step
 *   --client-apply=MS    after every HMR payload, re-request the updated module
 *                        exactly like Vite's client does (`import(url + '?t=')`);
 *                        MS = delay before that request starts. Use together with
 *                        --gap=0 to reproduce the "second save is swallowed" race.
 *   --css-import=1       temporarily add `<style scoped>@import '.../assets/index.css'`
 *   --ssr-warm=0|1|fs|fs-case
 *                        also populate the ssr environment:
 *                        1       -> ssr transform of the entry
 *                        fs      -> additionally ssr-transform the SFC through /@fs/<abs>
 *                        fs-case -> same, but with a lower-cased drive letter, which
 *                                   creates a *second* module node for the same file
 *                                   (Windows path casing) - see README "SSR/duplicate-node 实验"
 *   --deep=false         do not inject the read-only deep observer
 *   --port=N             dev server port                         (default: 5273)
 *   --debug              set DEBUG=vite:hmr
 */

import { mkdir, open, readFile, rename, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))

const FIXTURE = {
  label: 'Vite 8 + Vue 3 SFC HMR repro',
  html: 'index.html',
  entry: '/src/main.ts',
  sfc: 'src/components/HeavyPanel.vue',
  css: 'src/assets/index.css',
}

// ---------------------------------------------------------------------------
// args / paths
// ---------------------------------------------------------------------------

function parseArgs(argv) {
  const out = {}
  for (const rawArg of argv) {
    if (!rawArg.startsWith('--')) continue
    const [key, value = 'true'] = rawArg.slice(2).split('=')
    out[key] = value
  }
  return out
}

const args = parseArgs(process.argv.slice(2))
const fixture = FIXTURE

const opts = {
  edits: Number(args.edits ?? 15),
  mode: args.mode ?? 'template',
  gap: Number(args.gap ?? 400),
  settle: Number(args.settle ?? 5000),
  retry: Number(args.retry ?? 3),
  verifyFetch: args['verify-fetch'] !== 'false',
  writeMode: args['write-mode'] ?? 'direct',
  chunkDelay: Number(args['chunk-delay'] ?? 15),
  awaitWriteFinish: args['await-write-finish'] ? Number(args['await-write-finish']) : 0,
  prime: args.prime !== 'false',
  clientApply: args['client-apply'] === undefined ? -1 : Number(args['client-apply']),
  cssImport: args['css-import'] === '1',
  ssrWarm: args['ssr-warm'] ?? '0',
  deep: args.deep !== 'false',
  debug: args.debug === 'true',
  port: Number(args.port ?? 5273),
}

// Vite's debug logger reads process.env.DEBUG when the `debug` package is loaded,
// so --debug must be applied before importing vite.
if (opts.debug) process.env.DEBUG ??= 'vite:hmr'
const { createServer, normalizePath } = await import('vite')

const sfcAbs = path.join(ROOT, fixture.sfc)
const sfcUrl = '/' + normalizePath(fixture.sfc)
const cssAbs = fixture.css ? path.join(ROOT, fixture.css) : null

// ---------------------------------------------------------------------------
// raw output
// ---------------------------------------------------------------------------

const rawLines = []
function raw(line) {
  rawLines.push(line)
  process.stdout.write(line + '\n')
}

// With --debug, Vite's own `vite:hmr ...` debug output goes to stderr; mirror it
// into the raw log so the report is self-contained.
if (process.env.DEBUG) {
  const originalStdErrWrite = process.stderr.write.bind(process.stderr)
  process.stderr.write = (chunk, ...rest) => {
    for (const line of String(chunk).split('\n')) if (line.trim()) rawLines.push(`[stderr] ${line}`)
    return originalStdErrWrite(chunk, ...rest)
  }
}

// ---------------------------------------------------------------------------
// module node description
// ---------------------------------------------------------------------------

function describeNode(node, envName) {
  if (!node) return null
  const list = (set) => [...(set ?? [])].map((m) => m.url)
  return {
    env: envName,
    id: node.id ?? null,
    url: node.url ?? null,
    type: node.type ?? null,
    isSelfAccepting: node.isSelfAccepting,
    imported: list(node.importedModules),
    importers: list(node.importers),
    acceptedHmrDeps: list(node.acceptedHmrDeps),
    clientModuleUrl: node._clientModule?.url ?? null,
    ssrModuleUrl: node._ssrModule?.url ?? null,
  }
}

function nodesForFile(server, file, envName) {
  const normalized = normalizePath(file)
  const graph = envName ? server.environments[envName].moduleGraph : server.moduleGraph
  return [...(graph?.getModulesByFile(normalized) ?? [])].map((n) =>
    describeNode(n, envName ?? 'mixed'),
  )
}

// ---------------------------------------------------------------------------
// capture helpers (plugin logs, payloads, vite logger)
// ---------------------------------------------------------------------------

const hookRecords = [] // { at, name, timestamp, modules }
const pushedPayloads = [] // { at, env, payload }  (payload pushed into an environment)
const loggerLines = [] // { at, level, text }

const originalLog = console.log
console.log = (...parts) => {
  const text = parts
    .map((p) => (typeof p === 'string' ? p : Array.isArray(p) ? JSON.stringify(p) : String(p)))
    .join(' ')
  const match =
    /^\[DEBUG HMR (.+?)\]\s+(\S+)\s+timestamp:\s+(\S+)\s+file:\s+([\s\S]*?)\s+modules:\s+([\s\S]*)$/.exec(
      text,
    )
  if (match) {
    const record = {
      at: Date.now(),
      name: match[1],
      timestamp: Number(match[3]),
      file: match[4].trim(),
      modules: JSON.parse(match[5]),
    }
    hookRecords.push(record)
    raw(
      JSON.stringify({
        probe: 'hook',
        at: record.at,
        name: record.name,
        timestamp: record.timestamp,
        modules: record.modules,
      }),
    )
  }
  originalLog(text)
}

function patchHotChannel(server, envName) {
  const hot = server.environments[envName]?.hot
  if (!hot?.send) return
  const original = hot.send.bind(hot)
  hot.send = (payload) => {
    const at = Date.now()
    pushedPayloads.push({ at, env: envName, payload })
    raw(JSON.stringify({ probe: 'pushed-payload', at, env: envName, payload }))
    return original(payload)
  }
}

// ---------------------------------------------------------------------------
// mini browser: request the entry HTML and every imported module over HTTP
// ---------------------------------------------------------------------------

const IMPORT_RE = /(?:^|[\s;{}(])(?:import|export)\s*(?:[\s\S]*?\sfrom\s*)?["']([^"'\n]+)["']/g
const DYNAMIC_IMPORT_RE = /import\s*\(\s*["']([^"'\n]+)["']\s*\)/g

async function miniBrowser(baseUrl, htmlPath, report) {
  const htmlUrl = new URL(htmlPath, baseUrl).href
  const htmlRes = await fetch(htmlUrl)
  const html = await htmlRes.text()
  report.htmlStatus = htmlRes.status

  const queue = []
  for (const m of html.matchAll(/<script[^>]+src="([^"]+)"/g)) {
    queue.push(new URL(m[1], baseUrl).href)
  }
  const requested = []
  const seen = new Set()
  while (queue.length) {
    const url = queue.shift()
    if (!url || seen.has(url)) continue
    seen.add(url)
    let res
    try {
      res = await fetch(url)
    } catch (error) {
      report.errors.push(`${url}: ${error.message}`)
      continue
    }
    requested.push({ url, status: res.status, contentType: res.headers.get('content-type') })
    if (!res.ok) continue
    const type = res.headers.get('content-type') ?? ''
    if (!/javascript|ecmascript/.test(type)) {
      await res.text()
      continue
    }
    const code = await res.text()
    for (const re of [IMPORT_RE, DYNAMIC_IMPORT_RE]) {
      re.lastIndex = 0
      for (const m of code.matchAll(re)) {
        const specifier = m[1]
        if (!specifier.startsWith('/') && !specifier.startsWith('./') && !specifier.startsWith('../')) continue
        queue.push(new URL(specifier, url).href)
      }
    }
  }
  report.requested = requested
  return requested
}

// ---------------------------------------------------------------------------
// HMR websocket client (this is what the browser really receives)
// ---------------------------------------------------------------------------

const wsPayloads = [] // { at, payload }

async function connectHmrSocket(baseUrl, report) {
  if (typeof WebSocket === 'undefined') {
    report.ws = { connected: false, reason: 'global WebSocket unavailable' }
    return null
  }
  const wsUrl = new URL('/', baseUrl).href.replace(/^http/, 'ws')
  return await new Promise((resolve) => {
    let socket
    try {
      socket = new WebSocket(wsUrl, 'vite-hmr')
    } catch (error) {
      report.ws = { connected: false, reason: error.message }
      resolve(null)
      return
    }
    const timer = setTimeout(() => {
      report.ws = { connected: false, reason: 'timeout' }
      resolve(null)
    }, 5000)
    socket.addEventListener('open', () => {
      clearTimeout(timer)
      report.ws = { connected: true, url: wsUrl }
      resolve(socket)
    })
    socket.addEventListener('error', (event) => {
      clearTimeout(timer)
      report.ws = { connected: false, reason: String(event?.message ?? 'error') }
      resolve(null)
    })
    socket.addEventListener('message', (event) => {
      let payload
      try {
        payload = JSON.parse(String(event.data))
      } catch {
        return
      }
      const at = Date.now()
      wsPayloads.push({ at, payload })
      raw(JSON.stringify({ probe: 'ws-payload', at, payload }))
    })
  })
}

// ---------------------------------------------------------------------------
// edit helpers
// ---------------------------------------------------------------------------

function applyEdit(source, mode, index) {
  let next = source
  if (mode === 'template') next = next.replace(/HMR TEST \d+/, `HMR TEST ${index + 1}`)
  else if (mode === 'style')
    // toggle between two values so that the <style scoped> block always changes
    next = next.replace(/font-weight: (\d+);/, (_, current) => `font-weight: ${current === '700' ? 600 : 700};`)
  else if (mode === 'script') next = next.replace(/const probeTick = \d+/, `const probeTick = ${index + 1}`)
  else if (mode === 'both') next = applyEdit(applyEdit(source, 'template', index), 'style', index)
  else if (mode === 'toggle') next = toggleBlock(source).text
  else throw new Error(`unknown --mode=${mode}`)
  return next
}

// --- big fixture: comment / uncomment a large block in the template ----------
const BLOCK_START = '<div id="toggle-block">'
const BLOCK_NEXT = '<div id="after-toggle"'
// The big static subtree is emitted as a static HTML string, so in the rendered
// state the module code contains the escaped attribute  id=\"toggle-block\"  and
// in the commented state it does not (verified with scripts/_sig.mjs).
const BLOCK_TOKEN_RENDERED = 'id=\\"toggle-block\\"'

/** Comment / uncomment the `<div id="toggle-block">…</div>` block in the template. */
function toggleBlock(source) {
  const commentedStart = `<!-- ${BLOCK_START}`
  const cIdx = source.indexOf(commentedStart)
  if (cIdx >= 0) {
    const endTag = '</div> -->'
    const eIdx = source.indexOf(endTag, cIdx + commentedStart.length)
    if (eIdx < 0) throw new Error('toggle: unterminated commented block')
    return {
      state: 'uncommented',
      text:
        source.slice(0, cIdx) +
        BLOCK_START +
        source.slice(cIdx + commentedStart.length, eIdx) +
        '</div>' +
        source.slice(eIdx + endTag.length),
    }
  }
  const uIdx = source.indexOf(BLOCK_START)
  if (uIdx < 0) throw new Error('toggle: block not found')
  const nextIdx = source.indexOf(BLOCK_NEXT, uIdx)
  const region = source.slice(uIdx, nextIdx > 0 ? nextIdx : source.length)
  const lastClose = region.lastIndexOf('</div>')
  if (lastClose < 0) throw new Error('toggle: closing </div> not found')
  const closeAbs = uIdx + lastClose
  return {
    state: 'commented',
    text:
      source.slice(0, uIdx) +
      `<!-- ${BLOCK_START}` +
      source.slice(uIdx + BLOCK_START.length, closeAbs) +
      '</div> -->' +
      source.slice(closeAbs + '</div>'.length),
  }
}

/**
 * What must the module code contain after this edit? Used to detect
 * "payload delivered, but the module the browser re-fetches is the old one".
 */
function expectationFor(mode, source) {
  if (mode === 'toggle') {
    const commented = source.includes(`<!-- ${BLOCK_START}`)
    return {
      token: BLOCK_TOKEN_RENDERED,
      shouldContain: !commented,
      note: commented ? 'commented' : 'uncommented',
    }
  }
  if (mode === 'template') {
    const m = /HMR TEST ([\w-]+)/.exec(source)
    return m ? { token: `HMR TEST ${m[1]}`, shouldContain: true, note: `marker=${m[1]}` } : null
  }
  if (mode === 'style') {
    const m = /font-weight: (\d+);/.exec(source)
    return m ? { token: `font-weight: ${m[1]}`, shouldContain: true, note: `font-weight=${m[1]}` } : null
  }
  return null
}

function resolveMode(mode, index) {
  if (mode === 'cycle') return ['template', 'style', 'script'][index % 3]
  return mode
}

function addCssImport(source, cssAbsPath) {
  const relative = normalizePath(path.relative(path.dirname(sfcAbs), cssAbsPath))
  const specifier = relative.startsWith('.') ? relative : './' + relative
  if (source.includes(specifier)) return source
  return source.replace(/(<style scoped>\s*)/, `$1\n@import '${specifier}';\n`)
}

function isRealPayload(payload) {
  return payload?.type === 'update' || payload?.type === 'full-reload'
}

function payloadPaths(payload) {
  if (!payload) return []
  if (payload.type === 'update') return payload.updates.map((u) => u.path)
  return [payload.type]
}

/** The SFC itself or one of its virtual sub-modules (`?vue&type=style...`). */
function pathTouchesSfc(path) {
  return path === sfcUrl || path.startsWith(`${sfcUrl}?`)
}

function summarizePayload(payload) {
  if (!payload) return 'NONE'
  if (payload.type === 'update') return payload.updates.map((u) => `${u.type}:${u.path}`).join(' , ')
  return payload.type
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms))
}

/** Save the fixture the way a real editor might (see --write-mode). */
async function writeSfc(text) {
  if (opts.writeMode === 'replace') {
    const tmp = `${sfcAbs}.${process.pid}.tmp`
    await writeFile(tmp, text, 'utf8')
    await rename(tmp, sfcAbs)
    return
  }
  if (opts.writeMode === 'chunked') {
    const half = Math.floor(text.length / 2)
    const handle = await open(sfcAbs, 'w')
    try {
      await handle.write(text.slice(0, half))
      await sleep(opts.chunkDelay)
      await handle.write(text.slice(half))
    } finally {
      await handle.close()
    }
    return
  }
  await writeFile(sfcAbs, text, 'utf8')
}

// ---------------------------------------------------------------------------
// main
// ---------------------------------------------------------------------------

async function main() {
  const originalSfc = await readFile(sfcAbs, 'utf8')

raw(`# probe: ${fixture.label}`)
  raw('# node ' + process.version + ' | vite 8.3.0 | vue 3.5.24 | @vitejs/plugin-vue 6.0.9')
  raw(
    `# options: edits=${opts.edits} mode=${opts.mode} gap=${opts.gap}ms retry=${opts.retry} ` +
      `css-import=${opts.cssImport} ssr-warm=${opts.ssrWarm} deep=${opts.deep}\n`,
  )

  if (opts.cssImport && cssAbs) {
    await writeFile(sfcAbs, addCssImport(originalSfc, cssAbs), 'utf8')
    raw(`# fixture patched: <style scoped> now @imports ${fixture.css}\n`)
  }

  const deepObserver = {
    name: 'probe-deep-observer',
    // order: 'post' -> runs after vue()'s legacy handleHotUpdate, so it sees the
    // exact module list Vite is about to map onto the client environment.
    // Read-only: it never returns a value, so it cannot change HMR behaviour.
    handleHotUpdate: {
      order: 'post',
      handler(ctx) {
        raw(
          JSON.stringify({
            probe: 'deep',
            at: Date.now(),
            file: ctx.file,
            timestamp: ctx.timestamp,
            modules: ctx.modules.map((m) => describeNode(m, 'mixed')),
            clientEnvModules: nodesForFile(ctx.server, ctx.file, 'client'),
            ssrEnvModules: nodesForFile(ctx.server, ctx.file, 'ssr'),
          }),
        )
      },
    },
  }

  const server = await createServer({
    configFile: path.join(ROOT, 'vite.config.ts'),
    logLevel: 'info',
    server: {
      host: '127.0.0.1',
      port: opts.port,
      strictPort: false,
      // --await-write-finish=MS -> chokidar waits until the file stops changing
      // before Vite reads it (mitigates non-atomic writes of big files).
      ...(opts.awaitWriteFinish
        ? { watch: { awaitWriteFinish: { stabilityThreshold: opts.awaitWriteFinish, pollInterval: 10 } } }
        : {}),
    },
    plugins: opts.deep ? [deepObserver] : [],
  })

  patchHotChannel(server, 'client')
  for (const name of Object.keys(server.environments)) if (name !== 'client') patchHotChannel(server, name)

  const logger = server.config.logger
  for (const level of ['info', 'warn', 'error']) {
    const original = logger[level].bind(logger)
    logger[level] = (msg, lopt) => {
      loggerLines.push({ at: Date.now(), level, text: typeof msg === 'string' ? msg : String(msg?.message ?? msg) })
      return original(msg, lopt)
    }
  }

  await server.listen()
  const baseUrl = server.resolvedUrls?.local?.[0]
  if (!baseUrl) throw new Error('dev server did not report a local url')
  raw(`# dev server: ${baseUrl}`)

  const envNames = Object.keys(server.environments)
  const clientEnv = server.environments.client
  const ssrEnv = server.environments.ssr
  raw(`# environments: ${envNames.join(', ')}\n`)

  const report = { errors: [], ws: null, requested: [], htmlStatus: null }

  // --- behave like a browser: fetch the page and every module --------------
  await miniBrowser(baseUrl, fixture.html, report)
  raw(`# browser-like warm-up: ${report.requested.length} urls requested`)

  // --- optional: populate the ssr environment ------------------------------
  if (opts.ssrWarm !== '0' && ssrEnv) {
    const urls = [fixture.entry]
    if (opts.ssrWarm === 'fs' || opts.ssrWarm === 'fs-case') {
      let abs = normalizePath(sfcAbs)
      if (opts.ssrWarm === 'fs-case') abs = abs.replace(/^([A-Za-z]):/, (_, drive) => `${drive.toLowerCase()}:`)
      urls.push('/@fs/' + abs)
    }
    for (const url of urls) {
      try {
        const result = await ssrEnv.transformRequest(url)
        raw(`# ssr warm: ${url} -> ${result ? 'ok' : 'null'}`)
        const node = ssrEnv.moduleGraph.getModuleByUrl(url)
        for (const dep of node?.importedModules ?? []) {
          if (dep.url?.includes('HeavyPanel') || dep.url?.includes('App.vue')) {
            await ssrEnv.transformRequest(dep.url).catch(() => {})
          }
        }
      } catch (error) {
        raw(`# ssr warm failed: ${url}: ${error.message}`)
      }
    }
  }

  const fingerprint = {
    environmentNames: envNames,
    clientSfcModules: nodesForFile(server, sfcAbs, 'client'),
    ssrSfcModules: nodesForFile(server, sfcAbs, 'ssr'),
    mixedSfcModules: nodesForFile(server, sfcAbs, null),
    clientModuleCount: clientEnv.moduleGraph.idToModuleMap?.size ?? null,
  }

  raw('\n# --- module graph fingerprint (before any edit) ---')
  raw(`# client env module count: ${fingerprint.clientModuleCount}`)
  raw(`# client env modules for ${fixture.sfc}: ${JSON.stringify(fingerprint.clientSfcModules.map((n) => n.url))}`)
  raw(`# ssr env modules for ${fixture.sfc}:    ${JSON.stringify(fingerprint.ssrSfcModules.map((n) => n.url))}`)
  raw(`# mixed modules for ${fixture.sfc}:      ${JSON.stringify(fingerprint.mixedSfcModules.map((n) => n.url))}\n`)

  // --- real HMR socket ------------------------------------------------------
  const socket = await connectHmrSocket(baseUrl, report)
  raw(`# hmr socket: ${JSON.stringify(report.ws)}`)

  const realPayloads = () => (socket ? wsPayloads.filter((p) => isRealPayload(p.payload)) : [])
  const latestRealPayload = (fromWs, fromPush) =>
    (socket ? wsPayloads.slice(fromWs).find((p) => isRealPayload(p.payload)) : undefined) ??
    pushedPayloads.slice(fromPush).find((p) => isRealPayload(p.payload))

  async function waitForRealPayload(fromWs, fromPush, timeout) {
    const deadline = Date.now() + timeout
    while (Date.now() < deadline) {
      const found = latestRealPayload(fromWs, fromPush)
      if (found) return found
      await sleep(20)
    }
    return null
  }

  /** Wait until the HMR pipeline stops producing records (avoids mis-attributing a trailing event). */
  async function drain(timeout) {
    const deadline = Date.now() + timeout
    let lastCount = hookRecords.length + wsPayloads.length + pushedPayloads.length
    let stableSince = Date.now()
    while (Date.now() < deadline) {
      await sleep(50)
      const count = hookRecords.length + wsPayloads.length + pushedPayloads.length
      if (count !== lastCount) {
        lastCount = count
        stableSince = Date.now()
        continue
      }
      if (Date.now() - stableSince > 300) break
    }
  }

  // --- edit loop -----------------------------------------------------------
  const records = []
  let hookCursor = 0
  let wsCursor = 0
  let pushCursor = 0
  const clientRefetches = []
  try {
    if (opts.prime) {
      raw('# priming the file watcher ...')
      let primed = false
      for (let attempt = 0; attempt < 6 && !primed; attempt++) {
        // must change a real SFC block, otherwise plugin-vue (correctly) reports
        // "nothing changed" for a comment appended outside <template>/<style>.
        await writeSfc(applyEdit(originalSfc, 'template', 900 + attempt))
        primed = Boolean(await waitForRealPayload(wsCursor, pushCursor, 2500))
      }
      await writeFile(sfcAbs, originalSfc, 'utf8')
      await waitForRealPayload(wsCursor, pushCursor, 2500)
      await drain(2500)
      hookCursor = hookRecords.length
      wsCursor = wsPayloads.length
      pushCursor = pushedPayloads.length
      raw(`# watcher primed: ${primed} (ws=${Boolean(socket)})`)
    }

    for (let i = 1; i <= opts.edits; i++) {
      const mode = resolveMode(opts.mode, i)
      let wroteAt = Date.now()
      let found = null
      let attempts = 0
      let expectation = null
      for (attempts = 1; attempts <= opts.retry; attempts++) {
        const source = await readFile(sfcAbs, 'utf8')
        let next = applyEdit(source, mode, i)
        // on a retry the target value is already on disk: make a change that is
        // still visible *inside* an SFC block (a comment outside <template>/
        // <script>/<style> is ignored by the SFC parser, so plugin-vue would
        // correctly report "nothing changed" for it).
        if (next === source) next = source.replace(/HMR TEST ([^\s<]*)/, `HMR TEST $1-r${attempts}`)
        if (next === source) next = source.replace(/const probeTick = (\d+)/, `const probeTick = ${Number(process.hrtime.bigint() % 1000n) + 1000}`)
        if (next === source) throw new Error(`edit #${i} (${mode}) could not produce a change`)
        wroteAt = Date.now()
        await writeSfc(next)
        expectation = expectationFor(mode, next)

        // Simulate the browser applying the *previous* update: Vite's client
        // re-requests the updated module with `?t=<timestamp>` right after the
        // payload arrives. If that request lands after this save (what happens
        // when the client is slow to apply), its transform caches the new
        // descriptor content before the HMR handler runs for this save.
        if (opts.clientApply >= 0 && i > 1) {
          const requestedAt = Date.now()
          try {
            const res = await fetch(new URL(`${sfcUrl}?t=${requestedAt}`, baseUrl), {
              headers: { accept: '*/*' },
            })
            await res.text()
            clientRefetches.push({ edit: i, requestedAt, status: res.status, ok: res.ok })
          } catch (error) {
            clientRefetches.push({ edit: i, requestedAt, error: error.message })
          }
        }

        found = await waitForRealPayload(wsCursor, pushCursor, opts.settle)
        if (found) break
      }
      await sleep(40)

      // What would the browser actually get? Vite's client imports the updated
      // module as `acceptedPath + '?t=' + update.timestamp`; replay that request
      // and verify the returned code matches the state on disk.
      let clientFetch = null
      if (opts.verifyFetch && found?.payload?.type === 'update' && expectation) {
        clientFetch = await verifyClientFetch(baseUrl, found.payload, expectation)
      }

      const hooks = hookRecords.slice(hookCursor)
      const wsSlice = wsPayloads.slice(wsCursor)
      const pushSlice = pushedPayloads.slice(pushCursor)
      hookCursor = hookRecords.length
      wsCursor = wsPayloads.length
      pushCursor = pushedPayloads.length

      const record = {
        edit: i,
        mode,
        wroteAt,
        attempts,
        latencyMs: found ? found.at - wroteAt : null,
        clientPayload: found?.payload ?? null,
        clientPayloadSource: found ? (found.env ? 'hot-channel' : 'websocket') : null,
        websocketPayloadTypes: wsSlice.map((p) => p.payload?.type + (p.payload?.event ? ':' + p.payload.event : '')),
        pushedPayloadTypes: pushSlice.map((p) => `${p.env}:${p.payload?.type}${p.payload?.event ? ':' + p.payload.event : ''}`),
        clientRefetch: clientRefetches.filter((r) => r.edit === i),
        beforeVue: hooks.filter((h) => h.name === 'before-vue').map((h) => h.modules),
        afterVue: hooks.filter((h) => h.name === 'after-vue').map((h) => h.modules),
        viteLogger: loggerLines.filter((l) => l.at >= wroteAt).map((l) => l.text),
        expectation,
        clientFetch,
      }
      records.push(record)

      raw(
        `edit #${String(i).padStart(2)} [${mode}] latency=${record.latencyMs ?? '-'}ms ` +
          `payload=${summarizePayload(record.clientPayload)}`,
      )
      raw(
        JSON.stringify({
          probe: 'edit',
          edit: i,
          mode,
          beforeVue: record.beforeVue,
          afterVue: record.afterVue,
          payload: record.clientPayload,
        }),
      )
      if (opts.gap) await sleep(opts.gap)
    }
  } finally {
    await writeFile(sfcAbs, originalSfc, 'utf8')
    await sleep(400)
    if (socket) socket.close()
  }

  const analysis = analyze(records)
  const outDir = path.join(ROOT, 'probe-output')
  await mkdir(outDir, { recursive: true })
  const key = 'report' + (opts.cssImport ? '-cssimport' : '') + (opts.ssrWarm !== '0' ? `-ssr${opts.ssrWarm}` : '')
  const fullReport = {
    generatedAt: new Date().toISOString(),
    node: process.version,
    pinned: { vite: '8.3.0', vue: '3.5.24', '@vitejs/plugin-vue': '6.0.9' },
    options: opts,
    fixture,
    browser: report,
    fingerprint,
    analysis,
    clientRefetches,
    records,
  }
  await writeFile(path.join(outDir, `${key}-report.json`), JSON.stringify(fullReport, null, 2), 'utf8')
  await writeFile(path.join(outDir, `${key}-raw.log`), rawLines.join('\n') + '\n', 'utf8')

  raw('\n# --- summary ---')
  raw(`# classes: ${JSON.stringify(analysis.classes)}`)
  raw(
    `# edits=${analysis.total}  ok=${analysis.payloadHasSfc}  hmr-modules-lost=${analysis.payloadMissingSfc}  ` +
      `stale-client-fetch=${analysis.staleFetch}  full-reload=${analysis.fullReload}  ` +
      `not-detected/no-payload=${analysis.notDetected}`,
  )
  if (!analysis.suspects.length) raw('# no suspicious edit: every edit produced an HMR payload containing the SFC')
  for (const s of analysis.suspects.slice(0, 20)) {
    raw(
      `# SUSPECT edit #${s.edit} [${s.mode}] class=${s.class} detected=${s.detected} ` +
        `afterVue=${JSON.stringify(s.afterVueFlat)} payload=${JSON.stringify(s.payloadPaths)}`,
    )
  }
  raw(`# report: ${path.join(outDir, `${key}-report.json`)}`)

  console.log = originalLog
  await server.close()
  process.exitCode = analysis.payloadMissingSfc ? 2 : 0
}

/** Replay Vite's client re-request (`import(acceptedPath + '?t=' + timestamp)`) and check it is not stale. */
async function verifyClientFetch(baseUrl, payload, expectation) {
  const results = []
  for (const update of payload.updates) {
    if (!update.acceptedPath?.startsWith(sfcUrl)) continue
    const [pathname, query] = update.acceptedPath.split('?')
    const url = new URL(`${pathname}?t=${update.timestamp}${query ? `&${query}` : ''}`, baseUrl)
    const startedAt = Date.now()
    try {
      const res = await fetch(url, { headers: { accept: '*/*' } })
      const code = await res.text()
      const containsToken = code.includes(expectation.token)
      // extra context for reports: which marker does the fetched code actually have?
      const foundToken = (update.acceptedPath.endsWith('.vue') ? /HMR TEST [^\s<"\\]+/.exec(code)?.[0] : null) ?? null
      results.push({
        acceptedPath: update.acceptedPath,
        requestedAt: startedAt,
        status: res.status,
        durationMs: Date.now() - startedAt,
        bytes: code.length,
        token: expectation.token,
        foundToken,
        shouldContain: expectation.shouldContain,
        containsToken,
        stale: containsToken !== expectation.shouldContain,
      })
    } catch (error) {
      results.push({ acceptedPath: update.acceptedPath, requestedAt: startedAt, error: error.message })
    }
  }
  return results
}

function analyze(records) {
  const suspects = []
  const classes = {}
  let payloadHasSfc = 0
  let payloadMissingSfc = 0
  let fullReload = 0
  let notDetected = 0
  let staleFetch = 0

  for (const r of records) {
    const afterVueFlat = r.afterVue.flat()
    const paths = payloadPaths(r.clientPayload)
    const detected = r.beforeVue.length > 0
    const fetches = r.clientFetch ?? []
    const stale = fetches.some((f) => f.stale === true)
    if (stale) staleFetch++
    let klass
    if (r.clientPayload?.type === 'full-reload') {
      klass = 'full-reload'
      fullReload++
    } else if (!detected) {
      klass = 'not-detected' // watcher/harness artefact, not the reported bug
      notDetected++
    } else if (!r.clientPayload) {
      klass = 'detected-but-no-payload'
      notDetected++
    } else if (!paths.some(pathTouchesSfc)) {
      klass = 'hmr-modules-lost' // <- the reported bug
      payloadMissingSfc++
    } else if (stale) {
      // payload delivered, but the module the browser re-fetches is the old one
      klass = 'stale-client-fetch'
    } else {
      klass = 'ok'
      payloadHasSfc++
    }
    classes[klass] = (classes[klass] ?? 0) + 1
    r.class = klass
    r.detected = detected

    if (klass !== 'ok') {
      suspects.push({
        edit: r.edit,
        mode: r.mode,
        class: klass,
        detected,
        attempts: r.attempts,
        afterVueFlat,
        payloadPaths: paths,
        payloadType: r.clientPayload?.type ?? null,
        websocketPayloadTypes: r.websocketPayloadTypes,
        latencyMs: r.latencyMs,
        expectation: r.expectation,
        clientFetch: r.clientFetch,
      })
    }
  }

  return {
    total: records.length,
    classes,
    payloadHasSfc,
    payloadMissingSfc,
    fullReload,
    notDetected,
    staleFetch,
    suspects,
  }
}

main().catch((error) => {
  console.log = originalLog
  console.error(error)
  process.exitCode = 1
})
