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
      ctx.modules.map((m) => m.url),
    )
  },
})

export default defineConfig({
  plugins: [debugHmr('before-vue'), vue(), debugHmr('after-vue')],
  server: {
    host: '127.0.0.1',
    port: 5173,
    // 大文件（例如 552KB 的内联 SVG SFC）非原子保存时，watcher 事件可能落在
    // “文件只写了一半”的窗口里，Vite 会读到被截断的内容，plugin-vue 因此认为
    // “没有变化”而吞掉这次 HMR。默认保持与问题报告一致的配置；如果你的编辑器
    // 保存大文件时容易命中，取消下面注释即可（实测能把 14/15 被吞变成 15/15 正常）：
    // watch: { awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 10 } },
  },
})
