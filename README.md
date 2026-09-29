# vite8-vue-hmr-repro

最小复现：**Vite 8.3.0 + Vue 3.5.24 + `@vitejs/plugin-vue` 6.0.9**，反复保存同一个**大 SFC**
（template 里有大块静态内容）时，某几次保存的 HMR 会被“吞掉”：

```text
[DEBUG HMR before-vue] modules: [ 主模块, ?vue&type=style... ]   ← 检测正常
[DEBUG HMR after-vue]  modules: [ ]                              ← plugin-vue 认为“没有变化”
[vite] (client) [no modules matched] HeavyPanel.vue              ← client 收不到 payload，页面不更新
```

## 环境

| 项 | 值 |
| --- | --- |
| Windows + npm（不用 pnpm） | Node `^20.19.0 \|\| >=22.12.0`（实测 v26.5.1） |
| `vite` | `8.3.0`（锁定） |
| `vue` | `3.5.24`（锁定） |
| `@vitejs/plugin-vue` | `6.0.9`（锁定，未升级） |
| 其他依赖 | 无（没有 DevTools / Vitest / ESLint / Prettier / Pinia / Router） |

## 快速开始

```powershell
npm install
npm run dev        # http://127.0.0.1:5173
npm run gen        # 重新生成大夹具（默认 3700 个 cell ≈ 484KB，可加 --cells=6000 调大）
```

## 结构

```text
src/
├─ main.ts                  # createApp + index.css + vite:beforeUpdate/afterUpdate 日志
├─ App.vue
├─ assets/index.css
├─ stores/config.ts
└─ components/
├─ HeavyPanel.vue        # 大夹具：约 484KB 生成 markup + <script setup lang="ts"> + <style scoped>
   └─ Slot.vue
scripts/
├─ generate-big-fixture.mjs # 生成 HeavyPanel.vue（确定性，无任何业务/原创内容）
├─ hmr-probe.mjs            # 复现探针（只用 Node 内置模块）
└─ diagnostic-plugin.ts     # 可选：贴到真实项目里排查用的只读插件（复现本身不需要）
```

`vite.config.ts` 就是问题报告里那份：`[debugHmr('before-vue'), vue(), debugHmr('after-vue')]`，
debug 插件只打印、不返回 `ctx.modules`（返回会改变 HMR 行为）。

## 复现

### 手动

1. 打开 `src/components/HeavyPanel.vue`：`.grid` 里的**第一块内容**就是复现入口（源码里搜 `复现入口`），
   反复**注释 / 取消注释** `<!-- <div id="toggle-block"> … </div> -->` 并保存，10~20 次（保存越快越容易命中）；
2. 页面顶部两行是判据（`0` 是初始值，**先点几下 `+1`** 才有意义）：
   `点击计数` 不变 = HMR 保住了组件状态；`组件挂载时间` 变了 = 组件被整体 reload；
   `最近一次 HMR 事件` 时间不再更新 = 这次保存根本没触发 HMR（被吞掉）；
3. 终端对照：被吞的那次是 `before-vue` 有模块、`after-vue` 是 `[]`、只有 `(client) [no modules matched]`，页面毫无变化。

### 自动（一条命令）

```powershell
npm run probe           # 复现：反复注释 toggle-block + 非原子写（一次实测：15 次里 7 次被吞，时序相关）
npm run probe:fixed     # 同一场景 + server.watch.awaitWriteFinish → 15/15 正常
npm run probe:direct    # 同一场景但一次性写入 → 15/15 正常（反证问题出在“写盘方式”）
npm run probe:template  # 只改 HMR TEST 数字 → 15/15 正常（反证小改动没问题）
```

探针会给每次保存分类：`ok` / `no-payload`（被吞）/ `modules-lost` / `full-reload` / `not-detected`，
并把每次的 `before-vue`、`after-vue`、client payload、Vite logger 行写到
`probe-output/report.json` 与 `report.log`（已 gitignore）；只要有被吞的保存，进程退出码就是 2。
开关（都有默认值，默认即最坏情况）：`--mode=toggle|template`、`--write=chunked|direct|replace`
（`--chunk-delay=MS`）、`--gap=MS`、`--edits=N`、`--await-write-finish=MS`、`--settle=MS`、`--port=N`、`--debug`。

## 原因与修复

Vite 的 HMR 读文件函数 `readModifiedFile()` **只有读到空内容时才重试**；大文件保存过程中磁盘上有一小段
“半截”状态，watcher 事件落在这个窗口里时，Vite 会把半截内容当完整文件用（实测 `ctx.read()` 只读到
`276013` 字符 = 552027/2）。`@vitejs/plugin-vue` 拿这半截内容写进内部 `hmrCache`，下一次事件再跟它比较：

- 半截 ≠ 上次 → 会发 payload，但基于**截断的解析**（常见指纹：payload 里多出 `?vue&type=style...`）；
- 半截 == 上次比较过的内容 → 判定“没有变化” → 返回 `[]` → **client 收不到 payload，页面不更新**。

**修复 A（推荐，两行）** —— 让 chokidar 等文件写稳再触发 HMR（`vite.config.ts` 里已注释好，取消注释即可）：

```ts
server: {
  host: '127.0.0.1',
  port: 5173,
  watch: { awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 10 } },
}
```

实测：同一场景（`npm run probe`）一次 15 次里 **7 次被吞**，加上 `awaitWriteFinish` 后 **15/15 正常**。

**修复 B** —— 让编辑器**原子保存**（写临时文件再 rename）：实测 12/12 正常。

**上游修复方向** —— `readModifiedFile()` 目前只对“空内容”重试，建议把“读取期间内容仍在增长 / mtime 又变化”
也纳入重试，或默认开启 `awaitWriteFinish`。本仓库 + `probe-output/report.log` 可直接作为 issue 附件。

## 诊断插件

`scripts/diagnostic-plugin.ts` 是三个**只观察**的插件（不返回值、不改 modules、payload 1:1 转发）：加进真实
项目后会打印每个 ModuleNode 的 `url/id/type/isSelfAccepting/_clientModule/_ssrModule/importers`、
client 与 ssr 环境各自的模块、以及“同一文件是否存在多个不同 id”（`/@fs/...` 与 `/src/...` 并存）——
用于排查另一种“client payload 里丢了 SFC”的场景。

## 备注

- 夹具由 [generate-big-fixture.mjs](scripts/generate-big-fixture.mjs) 生成，是**合成 markup**（`c-0-0` 这类假数据 + 数字，
  无内联样式），不含任何真实业务/美术内容；想调大小就 `npm run gen -- --cells=6000`。
- 保持最小：依赖只有 `vite` / `vue` / `@vitejs/plugin-vue`（锁定版本），仓库里除生成的夹具外只有几个小文件；
  探针只保留复现需要的开关（`toggle/template` × `chunked/direct` × `awaitWriteFinish` × 次数/间隔）。
- `probe-output/`、`.local/` 已 gitignore。
