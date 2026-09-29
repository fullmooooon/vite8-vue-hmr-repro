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
npm run gen        # 重新生成大夹具（默认 2600 个 cell ≈ 490KB，可加 --cells=5200）
```

## 结构

```text
src/
├─ main.ts                  # createApp + index.css + vite:beforeUpdate/afterUpdate 日志
├─ App.vue
├─ assets/index.css
├─ stores/config.ts
└─ components/
   ├─ HeavyPanel.vue        # 大夹具：约 490KB 生成 markup + <script setup lang="ts"> + <style scoped>
   └─ Slot.vue
scripts/
├─ generate-big-fixture.mjs # 生成 HeavyPanel.vue（确定性，无任何业务/原创内容）
├─ hmr-probe.mjs            # 自动化 HMR 探针（只用 Node 内置模块）
└─ diagnostic-plugin.ts     # 贴到真实项目里的只读诊断插件
```

`vite.config.ts` 就是问题报告里那份：`[debugHmr('before-vue'), vue(), debugHmr('after-vue')]`，
debug 插件只打印、不返回 `ctx.modules`（返回会改变 HMR 行为）。

## 复现

### 手动

1. 打开 `src/components/HeavyPanel.vue`（约 490KB，搜索 `toggle-block`）；
2. 页面顶部有个**自检面板**：先点几下 `+1`，再动文件，然后看这一行——
   **计数不变** = HMR 保住了组件状态；**计数归 0 且“组件挂载时间”变了** = 组件被整体 reload（状态丢失）；
   **“最近一次 HMR 事件”时间不再更新** = 这次保存根本没触发 HMR（被吞掉）。
   所以计数一开始是 `0` 是正常的：**必须先点过 `+1`，它才有诊断意义**。
3. 反复**注释 / 取消注释** `<!-- <div id="toggle-block"> … </div> -->` 这块并保存，10~20 次（保存越快越容易命中）；
   也可以只改 `HMR TEST 1` 里的数字。
4. 同时看终端 `[DEBUG HMR before-vue]` / `[DEBUG HMR after-vue]`、浏览器 `[TEST] beforeUpdate/afterUpdate`。
   被吞掉的那次保存：`before-vue` 有模块、`after-vue` 是 `[]`、终端只有 `(client) [no modules matched]`，页面毫无变化。

### 自动（一条命令）

```powershell
npm run probe:big        # 大块注释切换，一次性写入 → 通常全绿
npm run probe:big:fast   # 大块注释切换 + 非原子写 + 连续保存 → 复现（实测 15 次里 12 次异常）
npm run probe:big:fix    # 同上 + awaitWriteFinish → 全绿（实测 15/15）
npm run probe            # 普通小改动（HMR TEST n），15 次
npm run probe:style      # 只改 <style scoped>
npm run probe:debug      # 带 DEBUG=vite:hmr
```

探针会像浏览器一样请求页面与整个 import 图、连真实 HMR WebSocket，对每次保存记录 `before-vue` /
`after-vue` 模块、client/ssr 环境的模块、client payload，并用 Vite 客户端的方式
（`import(acceptedPath + '?t=' + timestamp)`）复拉一次模块，检查是否拿到旧代码。
结果写到 `probe-output/report-report.json` 与 `report-raw.log`（已 gitignore）。

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

实测：最恶劣的一档（非原子写 + 连续保存）从 **15 次里 12 次异常** 变成 **15/15 正常**。

**修复 B** —— 让编辑器**原子保存**（写临时文件再 rename）：实测 12/12 正常。

**上游修复方向** —— `readModifiedFile()` 目前只对“空内容”重试，建议把“读取期间内容仍在增长 / mtime 又变化”
也纳入重试，或默认开启 `awaitWriteFinish`。本仓库 + `probe-output/report-raw.log` 可直接作为 issue 附件。

## 诊断插件

`scripts/diagnostic-plugin.ts` 是三个**只观察**的插件（不返回值、不改 modules、payload 1:1 转发）：加进真实
项目后会打印每个 ModuleNode 的 `url/id/type/isSelfAccepting/_clientModule/_ssrModule/importers`、
client 与 ssr 环境各自的模块、以及“同一文件是否存在多个不同 id”（`/@fs/...` 与 `/src/...` 并存）——
用于排查另一种“client payload 里丢了 SFC”的场景。

## 备注

- 夹具由 [generate-big-fixture.mjs](scripts/generate-big-fixture.mjs) 生成，是**合成 markup**（`c-0-0` 这类假数据），
  不含任何真实业务/美术内容；想调大小就 `npm run gen -- --cells=5200`。
- `probe-output/`、`.local/` 已 gitignore。
