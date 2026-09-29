#!/usr/bin/env node
/**
 * 最小复现探针（只用 Node 内置模块）。
 *
 * 它像一个浏览器那样：请求 index.html 及整个 import 图、连真实 HMR WebSocket，
 * 然后按指定的“保存方式”反复改 src/components/HeavyPanel.vue，并记录每次保存：
 *   - [DEBUG HMR before-vue] / [DEBUG HMR after-vue] 看到的模块
 *   - client 实际收到的 HMR payload
 *   - 结果分类：ok / no-payload（被吞掉）/ modules-lost / full-reload
 * 结果写入 probe-output/report.json 与 report.log。
 *
 * 用法：
 *   npm run probe              # 复现：反复注释 toggle-block + 非原子写（默认参数就是最坏情况）
 *   npm run probe:fixed        # 同上，但开启 server.watch.awaitWriteFinish（应全绿）
 *   npm run probe:direct       # 同上，但一次性写入（应全绿，用来反证是“写盘方式”导致的）
 *   npm run probe:template     # 只改 HMR TEST 数字的小改动（应全绿）
 *
 * 开关：
 *   --mode=toggle|template      改哪个块（默认 toggle：注释/取消注释大块）
 *   --write=chunked|direct|replace
 *                               保存方式（默认 chunked：先写一半、停一下、再写另一半，
 *                               这样磁盘上会短暂出现“半截文件”，模拟大文件被非原子保存）
 *   --chunk-delay=MS            chunked 两次写之间的停顿（默认 5ms）
 *   --gap=MS                    两次保存之间的间隔（默认 0）
 *   --edits=N                   保存次数（默认 15）
 *   --settle=MS                 每次保存后等待 payload 的上限（默认 5000ms）
 *   --await-write-finish=MS     给 server.watch 加上 awaitWriteFinish（修复对照）
 *   --port=N                    端口（默认 5273）
 *   --debug                     打开 DEBUG=vite:hmr
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

// Vite 的 debug logger 在加载时会读 process.env.DEBUG，所以必须先设置再 import。
if (opts.debug) process.env.DEBUG ??= 'vite:hmr'
const { createServer, normalizePath } = await import('vite')

const sfcAbs = path.join(ROOT, FIXTURE.sfc)
const sfcUrl = '/' + normalizePath(FIXTURE.sfc)
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

// --- 夹具：一大块放在 <template> 最前面的静态内容 ---------------------------
const BLOCK_START = '<div id="toggle-block">'
const BLOCK_NEXT = '<div id="after-toggle"'

/** 注释 / 取消注释 `<!-- <div id="toggle-block"> … </div> -->` */
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

/** 按指定方式保存（见 --write）。 */
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

// --- 采集：插件日志 / HMR payload / Vite logger -----------------------------
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
const payloads = [] // { at, payload }（推给 client environment 的）
const wsPayloads = [] // { at, payload }（浏览器真的收到的）
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

/** 浏览器行为 1：请求 index.html 并沿 import 图把模块都拉一遍（填 client env 的 module graph）。 */
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

/** 浏览器行为 2：连真实 HMR WebSocket，收集 client 实际收到的 payload。 */
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

  /** 等一次“新的” payload（只看 fromWs/fromPush 之后到达的）。 */
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
    // 预热 watcher：刚起的 server 会漏掉最初几次写盘事件，先做一次真实改动并等它消化完。
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

  raw(`\n# 结果: ${JSON.stringify(counts)}`)
  raw(`# ${opts.edits} 次保存里 ${failed} 次 HMR 被吞 / 丢模块（ok=${counts.ok ?? 0}）`)
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
