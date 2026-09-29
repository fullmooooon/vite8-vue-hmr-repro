#!/usr/bin/env node
/**
 * Minimal reproduction probe (Node built-ins only).
 *
 * It acts like a browser: fetches index.html plus the whole import graph, opens a real
 * HMR WebSocket, then repeatedly saves src/components/HeavyPanel.vue with the configured
 * write pattern and records, for every save:
 *   - the modules seen by [DEBUG HMR before-vue] / [DEBUG HMR after-vue]
 *   - the HMR payload the client really receives
 *   - a class: ok / no-payload (swallowed) / modules-lost / full-reload
 * Results are written to probe-output/report.json and probe-output/report.log.
 *
 * Scripts:
 *   npm run probe             # reproduce: toggle the big block + non-atomic save
 *   npm run probe:fixed       # same, with server.watch.awaitWriteFinish (the fix)
 *   npm run probe:direct      # same, but a single write (proves the write pattern matters)
 *   npm run probe:template    # small edits (HMR TEST n) only
 *
 * Flags:
 *   --mode=toggle|template     which block to edit (default: toggle)
 *   --write=chunked|direct|replace
 *                              how the file is saved (default: chunked = write half,
 *                              pause, write the rest, so the file is briefly incomplete
 *                              on disk, like a big file saved non-atomically)
 *   --chunk-delay=MS           pause inside a chunked write (default: 5)
 *   --gap=MS                   pause between two saves (default: 0)
 *   --edits=N                  number of saves (default: 15)
 *   --settle=MS                max wait for a payload after each save (default: 5000)
 *   --await-write-finish=MS    add server.watch.awaitWriteFinish (the fix)
 *   --port=N                   dev server port (default: 5273)
 *   --debug                    set DEBUG=vite:hmr
 *
 * 中文说明见 README 的「中文说明」一节。
 */

import { mkdir, open, readFile, rename, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const FIXTURE = {
  html: 'index.html',
  entry: '/src/main.ts',
  sfc: 'src/components/HeavyPanel.vue',
}

function parseArgs(argv) {
  const out = {}
  for (const raw of argv) {
    if (!raw.startsWith('--')) continue
    const [key, value = 'true'] = raw.slice(2).split('=')
    out[key] = value
  }
  return out
}

const args = parseArgs(process.argv.slice(2))
const opts = {
  mode: args.mode ?? 'toggle',
  edits: Number(args.edits ?? 15),
  write: args.write ?? 'chunked',
  chunkDelay: Number(args['chunk-delay'] ?? 5),
  gap: Number(args.gap ?? 0),
  settle: Number(args.settle ?? 5000),
  awaitWriteFinish: Number(args['await-write-finish'] ?? 0),
  port: Number(args.port ?? 5273),
  debug: args.debug === 'true',
}

// Vite's debug logger reads process.env.DEBUG when it is loaded, so set it before importing.
if (opts.debug) process.env.DEBUG ??= 'vite:hmr'
const { createServer, normalizePath } = await import('vite')

const sfcAbs = path.join(ROOT, FIXTURE.sfc)
const sfcUrl = '/' + normalizePath(FIXTURE.sfc)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// --- fixture: one big static block at the very beginning of <template> -------
const BLOCK_START = '<div id="toggle-block">'
const BLOCK_NEXT = '<div id="after-toggle"'

/** Comment / uncomment `<!-- <div id="toggle-block"> … </div> -->`. */
function toggleBlock(source) {
  const commentedStart = `<!-- ${BLOCK_START}`
  const cIdx = source.indexOf(commentedStart)
  if (cIdx >= 0) {
    const endTag = '</div> -->'
    const eIdx = source.indexOf(endTag, cIdx + commentedStart.length)
    if (eIdx < 0) throw new Error('toggle: unterminated commented block')
    return (
      source.slice(0, cIdx) +
      BLOCK_START +
      source.slice(cIdx + commentedStart.length, eIdx) +
      '</div>' +
      source.slice(eIdx + endTag.length)
    )
  }
  const uIdx = source.indexOf(BLOCK_START)
  if (uIdx < 0) throw new Error('toggle: block not found')
  const nextIdx = source.indexOf(BLOCK_NEXT, uIdx)
  const region = source.slice(uIdx, nextIdx > 0 ? nextIdx : source.length)
  const lastClose = region.lastIndexOf('</div>')
  if (lastClose < 0) throw new Error('toggle: closing </div> not found')
  const closeAbs = uIdx + lastClose
  return (
    source.slice(0, uIdx) +
    `<!-- ${BLOCK_START}` +
    source.slice(uIdx + BLOCK_START.length, closeAbs) +
    '</div> -->' +
    source.slice(closeAbs + '</div>'.length)
  )
}

function applyEdit(source, mode, index) {
  if (mode === 'toggle') return toggleBlock(source)
  if (mode === 'template') {
    const next = source.replace(/HMR TEST \d+/, `HMR TEST ${index + 1}`)
    if (next === source) throw new Error('template: marker not found')
    return next
  }
  throw new Error(`unknown --mode=${mode}`)
}

/** Save the fixture using the configured write pattern (see --write). */
async function writeSfc(text) {
  if (opts.write === 'replace') {
    const tmp = `${sfcAbs}.${process.pid}.tmp`
    await writeFile(tmp, text, 'utf8')
    await rename(tmp, sfcAbs)
    return
  }
  if (opts.write === 'chunked') {
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
  if (opts.write !== 'direct') throw new Error(`unknown --write=${opts.write}`)
  await writeFile(sfcAbs, text, 'utf8')
}

// --- capture: plugin logs / HMR payloads / Vite logger ----------------------
const rawLines = []
function raw(line) {
  rawLines.push(line)
  process.stdout.write(line + '\n')
}

if (opts.debug) {
  const original = process.stderr.write.bind(process.stderr)
  process.stderr.write = (chunk, ...rest) => {
    for (const line of String(chunk).split('\n')) if (line.trim()) rawLines.push(`[stderr] ${line}`)
    return original(chunk, ...rest)
  }
}

const hookRecords = [] // { at, name, modules }
const payloads = [] // { at, payload } pushed into the client environment
const wsPayloads = [] // { at, payload } the browser really receives
const loggerLines = []

const originalLog = console.log
console.log = (...parts) => {
  const text = parts
    .map((p) => (typeof p === 'string' ? p : Array.isArray(p) ? JSON.stringify(p) : String(p)))
    .join(' ')
  const m = /^\[DEBUG HMR (.+?)\]\s+(\S+)\s+timestamp:\s+(\S+)\s+file:\s+([\s\S]*?)\s+modules:\s+([\s\S]*)$/.exec(text)
  if (m) hookRecords.push({ at: Date.now(), name: m[1], modules: JSON.parse(m[5]) })
  originalLog(text)
}

/** Browser behaviour 1: fetch index.html and follow the import graph (fills the client env graph). */
async function warmUp(baseUrl) {
  const html = await (await fetch(new URL(FIXTURE.html, baseUrl))).text()
  const queue = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map((m) => new URL(m[1], baseUrl).href)
  const seen = new Set()
  while (queue.length) {
    const url = queue.shift()
    if (!url || seen.has(url)) continue
    seen.add(url)
    let res
    try {
      res = await fetch(url)
    } catch {
      continue
    }
    const type = res.headers.get('content-type') ?? ''
    if (!res.ok || !/javascript|ecmascript/.test(type)) {
      await res.text()
      continue
    }
    const code = await res.text()
    for (const m of code.matchAll(/(?:^|[\s;{}(])(?:import|export)\s*(?:[\s\S]*?\sfrom\s*)?["']([^"'\n]+)["']/g)) {
      const spec = m[1]
      if (spec.startsWith('/') || spec.startsWith('./') || spec.startsWith('../')) queue.push(new URL(spec, url).href)
    }
  }
}

/** Browser behaviour 2: connect a real HMR WebSocket and collect the payloads it receives. */
function connectHmrSocket(baseUrl) {
  const wsUrl = new URL('/', baseUrl).href.replace(/^http/, 'ws')
  return new Promise((resolve) => {
    const socket = new WebSocket(wsUrl, 'vite-hmr')
    const timer = setTimeout(() => resolve(null), 5000)
    socket.addEventListener('open', () => {
      clearTimeout(timer)
      resolve(socket)
    })
    socket.addEventListener('error', () => {
      clearTimeout(timer)
      resolve(null)
    })
    socket.addEventListener('message', (event) => {
      try {
        wsPayloads.push({ at: Date.now(), payload: JSON.parse(String(event.data)) })
      } catch {
        /* ignore */
      }
    })
  })
}

const isRealPayload = (p) => p?.type === 'update' || p?.type === 'full-reload'
const pathsOf = (p) => (p?.type === 'update' ? p.updates.map((u) => u.path) : [p?.type])

async function main() {
  const originalSfc = await readFile(sfcAbs, 'utf8')
  raw(`# probe: ${opts.mode} / write=${opts.write}(${opts.chunkDelay}ms) / edits=${opts.edits} / awaitWriteFinish=${opts.awaitWriteFinish || 'off'}`)

  const server = await createServer({
    configFile: path.join(ROOT, 'vite.config.ts'),
    logLevel: 'info',
    server: {
      host: '127.0.0.1',
      port: opts.port,
      strictPort: false,
      ...(opts.awaitWriteFinish
        ? { watch: { awaitWriteFinish: { stabilityThreshold: opts.awaitWriteFinish, pollInterval: 10 } } }
        : {}),
    },
  })

  for (const [envName, env] of Object.entries(server.environments)) {
    const hot = env.hot
    if (!hot?.send) continue
    const send = hot.send.bind(hot)
    hot.send = (payload) => {
      if (isRealPayload(payload)) payloads.push({ at: Date.now(), env: envName, payload })
      return send(payload)
    }
  }
  for (const level of ['info', 'warn', 'error']) {
    const log = server.config.logger[level].bind(server.config.logger)
    server.config.logger[level] = (msg, o) => {
      loggerLines.push({ at: Date.now(), text: typeof msg === 'string' ? msg : String(msg) })
      return log(msg, o)
    }
  }

  await server.listen()
  const baseUrl = server.resolvedUrls?.local?.[0]
  if (!baseUrl) throw new Error('dev server did not report a local url')
  raw(`# dev server: ${baseUrl}`)
  await warmUp(baseUrl)
  const socket = await connectHmrSocket(baseUrl)
  raw(`# hmr websocket: ${socket ? 'connected' : 'FAILED (fallback: hot-channel patch)'}\n`)

  /** Wait for a *new* real payload (only those arriving after fromWs/fromPush). */
  async function waitForPayload(fromWs, fromPush, timeout) {
    const deadline = Date.now() + timeout
    while (Date.now() < deadline) {
      const viaWs = wsPayloads.slice(fromWs).find((p) => isRealPayload(p.payload))
      if (viaWs) return viaWs
      const viaPush = payloads.slice(fromPush).find((p) => isRealPayload(p.payload))
      if (viaPush) return viaPush
      await sleep(20)
    }
    return null
  }

  let hookCursor = 0
  let wsCursor = 0
  let pushCursor = 0
  const takeCursors = () => ({
    hooks: hookRecords.slice(hookCursor),
    ws: wsPayloads.slice(wsCursor),
    push: payloads.slice(pushCursor),
  })
  const resetCursors = () => {
    hookCursor = hookRecords.length
    wsCursor = wsPayloads.length
    pushCursor = payloads.length
  }

  const records = []
  try {
    // Prime the watcher: a freshly started server misses the first write events, so make a
    // real change first and wait until it settles.
    raw('# priming watcher ...')
    for (let i = 0; i < 6; i++) {
      const fromWs = wsPayloads.length
      const fromPush = payloads.length
      await writeSfc(applyEdit(originalSfc, 'template', 900 + i))
      if (await waitForPayload(fromWs, fromPush, 2500)) break
    }
    const fromWs = wsPayloads.length
    const fromPush = payloads.length
    await writeFile(sfcAbs, originalSfc, 'utf8')
    await waitForPayload(fromWs, fromPush, 2500)
    await sleep(400)
    resetCursors()

    for (let i = 1; i <= opts.edits; i++) {
      const source = await readFile(sfcAbs, 'utf8')
      const wroteAt = Date.now()
      const fromWs = wsPayloads.length
      const fromPush = payloads.length
      await writeSfc(applyEdit(source, opts.mode, i))
      const found = await waitForPayload(fromWs, fromPush, opts.settle)
      await sleep(40)

      const { hooks, ws, push } = takeCursors()
      resetCursors()
      const record = {
        edit: i,
        latencyMs: found ? found.at - wroteAt : null,
        beforeVue: hooks.filter((h) => h.name === 'before-vue').map((h) => h.modules.flat()),
        afterVue: hooks.filter((h) => h.name === 'after-vue').map((h) => h.modules.flat()),
        clientPayload: found?.payload ?? null,
        clientPayloadVia: found ? (found.env ? `hot-channel:${found.env}` : 'websocket') : null,
        wsPayloadTypes: ws.map((p) => p.payload?.type + (p.payload?.event ? `:${p.payload.event}` : '')),
        pushedVia: push.map((p) => `${p.env}:${p.payload?.type}`),
        viteLogger: loggerLines.filter((l) => l.at >= wroteAt).map((l) => l.text),
      }
      const paths = pathsOf(record.clientPayload)
      const detected = record.beforeVue.length > 0
      record.class = !detected
        ? 'not-detected'
        : !record.clientPayload
          ? 'no-payload'
          : record.clientPayload.type === 'full-reload'
            ? 'full-reload'
            : paths.some((p) => p === sfcUrl || p.startsWith(`${sfcUrl}?`))
              ? 'ok'
              : 'modules-lost'
      records.push(record)
      raw(`#${String(i).padStart(2)} ${record.class.padEnd(12)} latency=${record.latencyMs ?? '-'}ms payload=${JSON.stringify(paths)}`)
      if (opts.gap) await sleep(opts.gap)
    }
  } finally {
    await writeFile(sfcAbs, originalSfc, 'utf8')
    await sleep(400)
    if (socket) socket.close()
  }

  const counts = {}
  for (const r of records) counts[r.class] = (counts[r.class] ?? 0) + 1
  const failed = (counts['no-payload'] ?? 0) + (counts['modules-lost'] ?? 0)

  const outDir = path.join(ROOT, 'probe-output')
  await mkdir(outDir, { recursive: true })
  await writeFile(
    path.join(outDir, 'report.json'),
    JSON.stringify(
      {
        when: new Date().toISOString(),
        node: process.version,
        pinned: { vite: '8.3.0', vue: '3.5.24', '@vitejs/plugin-vue': '6.0.9' },
        options: opts,
        devServer: baseUrl,
        websocket: Boolean(socket),
        counts,
        records,
      },
      null,
      2,
    ),
    'utf8',
  )
  await writeFile(path.join(outDir, 'report.log'), rawLines.join('\n') + '\n', 'utf8')

  raw(`\n# result: ${JSON.stringify(counts)}`)
  raw(`# ${failed} of ${opts.edits} saves lost their HMR update (ok=${counts.ok ?? 0})`)
  raw(`# 结果：${opts.edits} 次保存里 ${failed} 次 HMR 被吞 / 丢模块（ok=${counts.ok ?? 0}）`)
  raw(`# report: ${path.join(outDir, 'report.json')}`)

  console.log = originalLog
  await server.close()
  process.exitCode = failed ? 2 : 0
}

main().catch((error) => {
  console.log = originalLog
  console.error(error)
  process.exitCode = 1
})
