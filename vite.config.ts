import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'

/**
 * Pure observer plugin.
 *
 * It only logs the HMR context. It intentionally does NOT `return ctx.modules`,
 * so it cannot influence which modules end up in the client HMR payload.
 *
 * NOTE: the only deviation from the snippet used in the bug report is the
 * `: Plugin` return type annotation (identical runtime behaviour, but it keeps
 * editors/tsc from complaining about an implicit `any` on `ctx`).
 */
const debugHmr = (name: string): Plugin => ({
  name: `debug-hmr-${name}`,

  handleHotUpdate(ctx) {
    console.log(
      `[DEBUG HMR ${name}]`,
      new Date().toLocaleTimeString(),
      'timestamp:',
      ctx.timestamp,
      '\nfile:',
      ctx.file,
      '\nmodules:',
      ctx.modules.map((m) => m.url)
    )
  },
})

export default defineConfig({
  plugins: [debugHmr('before-vue'), vue(), debugHmr('after-vue')],
  server: {
    host: '127.0.0.1',
    port: 5173,
    // Big files are saved non-atomically: the watcher can fire while the file is only
    // half written, Vite then reads a truncated file and plugin-vue concludes "nothing
    // changed", so this HMR update is swallowed. Keep the line below commented out to
    // reproduce the bug (that is the reported setup); un-comment it to fix it
    // (measured: 7/15 swallowed -> 15/15 fine).
    // watch: { awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 10 } },
  },
})
