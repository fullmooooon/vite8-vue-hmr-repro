# vite8-vue-hmr-repro

Minimal reproduction: in **Vite 8.3.1 + Vue 3.5.24 + `@vitejs/plugin-vue` 6.0.9**, saving the same **large SFC** (a template with a big static block) over and over makes some of the HMR updates get **silently swallowed**:

```text
[DEBUG HMR before-vue] modules: [ main module, ?vue&type=style... ]   <- change was detected
[DEBUG HMR after-vue]  modules: [ ]                                   <- plugin-vue sees "no change"
[vite] (client) [no modules matched] HeavyPanel.vue                   <- no payload reaches the client
```

## Environment

| item | value |
| --- | --- |
| OS / package manager | Windows + npm (no pnpm) |
| Node.js | `^20.19.0 \|\| >=22.12.0` (measured on v26.5.1) |
| `vite` | `8.3.1` (pinned; the HMR code paths involved are identical to 8.3.0 — verified by diffing the shipped dist) |
| `vue` | `3.5.24` (pinned) |
| `@vitejs/plugin-vue` | `6.0.9` (pinned, not upgraded) |
| anything else | none — no DevTools / Vitest / ESLint / Prettier / Pinia / Router |

## Quick start

```powershell
npm install
npm run dev        # http://127.0.0.1:5173
npm run gen        # regenerate the fixture (default 3700 cells ≈ 484 KB, `--cells=6000` for bigger)
```

## Layout

```text
src/
├─ main.ts                  # createApp + index.css + vite:beforeUpdate/afterUpdate logs
├─ App.vue
├─ assets/index.css
├─ stores/config.ts
└─ components/
   ├─ HeavyPanel.vue        # the fixture: ~484 KB generated template + <script setup lang="ts"> + <style scoped>
   └─ Slot.vue
scripts/
├─ generate-big-fixture.mjs # generates HeavyPanel.vue (deterministic, no real content)
├─ hmr-probe.mjs            # reproduction probe (Node built-ins only)
└─ diagnostic-plugin.ts     # optional, read-only helpers for your own project
```

`vite.config.ts` is the config from the bug report: `[debugHmr('before-vue'), vue(), debugHmr('after-vue')]`. The debug plugins only log — they never return `ctx.modules` (returning it would change HMR behaviour).

## Reproduce

### Manually

1. Open `src/components/HeavyPanel.vue`: the **first thing inside `.grid`** is the reproduction entry (search for `reproduction entry` / `复现入口`). Comment / uncomment the `<!-- <div id="toggle-block"> … </div> -->` wrapper around that block and save — **a few saves (2–5) are usually enough**, no need for 20.
2. **Watch the banner**: the yellow `toggle-block is RENDERED …` banner lives *inside* the toggled block and is the first thing in the grid. Comment the block out, save, and look at the page: if the banner is still rendered, that save was swallowed (nothing changed). This is the moment to look for.
3. The two lines above the grid tell you more (`0` is just the initial value — **click `+1` a few times first**, otherwise the counter proves nothing): `clicked` unchanged = HMR kept the component state; `component mounted at` changed = the component was reloaded; `last HMR event` not updating = this save did not trigger HMR at all (swallowed).
4. Terminal: for a swallowed save, `before-vue` lists modules, `after-vue` is `[]`, and the only log line is `(client) [no modules matched]` — the page does not change.

### Automatically (one command)

```powershell
npm run probe           # reproduce: toggle the block + non-atomic save (measured: 7–15 of 15 saves swallowed, timing dependent)
npm run probe:fixed     # same + server.watch.awaitWriteFinish -> 15/15 fine
npm run probe:direct    # same but a single write -> 15/15 fine (the write pattern is the trigger)
npm run probe:template  # only the `HMR TEST n` number changes -> 15/15 fine
```

The probe classifies every save (`ok` / `no-payload` / `modules-lost` / `full-reload` / `not-detected`), writes `probe-output/report.json` and `probe-output/report.log`, and exits with code **2** if any save was swallowed. Flags (the defaults are already the worst case): `--mode=toggle|template`, `--write=chunked|direct|replace` (`--chunk-delay=MS`), `--gap=MS`, `--edits=N`, `--await-write-finish=MS`, `--settle=MS`, `--port=N`, `--debug`.

Add `--read-evidence` to also print, for every HMR event, what the file looked like on disk vs. what Vite's `readModifiedFile()` (`ctx.read()`) actually returned — this is the raw proof that Vite can hand a half-written / stale file to plugins:

```text
# read-evidence(+14ms): expected=499597 chars, onDisk=499595 chars, ctx.read()=499595 chars, fileHalfWritten=true, viteReadTruncated=true, ...
# read-evidence(+50ms): expected=499595 chars, onDisk=249797 chars, ctx.read()=499595 chars, fileHalfWritten=true, viteReadTruncated=false, ...
```

## Cause and fix

Vite's HMR file reader `readModifiedFile()` retries **only when the content is empty**. While a large file is being saved it is briefly incomplete on disk; if the watcher fires inside that window, Vite treats the half-written content as the whole file (measured on a 552 KB fixture: `ctx.read()` returned `276013` of `552027` characters — exactly the first half). `@vitejs/plugin-vue` caches that truncated descriptor in its internal `hmrCache`, and the next event is compared against it:

- truncated ≠ previous → a payload is emitted, but based on a truncated parse (a common fingerprint is a spurious `?vue&type=style...` entry in the payload);
- truncated == what it compared against last time → "no change" → `[]` → **no payload at all, the page stays stale**.

**Fix A (recommended, one line)** — let chokidar wait until the file stops changing. The line is already in `vite.config.ts`, commented out:

### Does the file size matter?

On the editor side, yes: the window during which the file is incomplete on disk is the duration of the save, and that grows with the size (a plain `fs.writeFile` of this fixture measures **0.80 ms at 157 KB, 1.96 ms at 484 KB, 2.57 ms at 918 KB, 5.17 ms at 1.8 MB** on this machine; VS Code adds its own I/O on top, plus AV/file-sync on Windows). In the reproduction the race is triggered on purpose, so it fails at any size — measured: **157 KB → 14/15 swallowed, 484 KB → 14/15, 918 KB → 12/15** — while one non-chunked write is always fine (`npm run probe:direct`, 484 KB → 0/15). Sweep the size yourself with `npm run gen -- --cells=N` (1200 ≈ 157 KB, 3700 ≈ 484 KB, 7000 ≈ 918 KB).

```ts
server: {
  host: '127.0.0.1',
  port: 5173,
  watch: { awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 10 } },
}
```

Measured: the same scenario goes from **7–15 of 15 saves swallowed** (varies per run) to **15/15 fine**.

**Fix B** — make your editor save atomically (temp file + rename). Measured 15/15 fine.

**Upstream** — `readModifiedFile()` currently only retries on empty content; it could also retry while the file is still growing / its mtime keeps changing, or `awaitWriteFinish` could be enabled by default. This repo plus `probe-output/report.log` can be attached to an issue as-is.

## Optional diagnostics for your own project

`scripts/diagnostic-plugin.ts` contains three read-only plugins that print, per ModuleNode, `url / id / type / isSelfAccepting / _clientModule / _ssrModule / importers`, the client and ssr module lists, and whether one file has duplicate ids (`/@fs/...` vs `/src/...`). They return nothing and forward payloads 1:1.

## Notes

- The fixture is generated synthetic markup (`c-0-0` + numbers, no inline styles): no real business or artwork content. Scale it with `npm run gen -- --cells=6000`.
- Kept minimal: only `vite` / `vue` / `@vitejs/plugin-vue`, 16 files, one generated fixture; the probe keeps only the switches the reproduction needs.
- `probe-output/` and `.local/` are gitignored.

<details>
<summary><b>中文说明（点开 / click to expand）</b></summary>

### 环境

| 项 | 值 |
| --- | --- |
| Windows + npm（不用 pnpm） | Node `^20.19.0 \|\| >=22.12.0`（实测 v26.5.1） |
| `vite` / `vue` / `@vitejs/plugin-vue` | `8.3.1` / `3.5.24` / `6.0.9`（全部锁定；涉及的 HMR 代码路径与 8.3.0 相同，已 diff dist 确认） |
| 其他依赖 | 无（没有 DevTools / Vitest / ESLint / Prettier / Pinia / Router） |

### 快速开始

```powershell
npm install
npm run dev        # http://127.0.0.1:5173
npm run gen        # 重新生成夹具（默认 3700 个 cell ≈ 484KB，`--cells=6000` 可调大）
```

### 手动复现

1. 打开 `src/components/HeavyPanel.vue`：`.grid` 里的**第一块内容**就是复现入口（源码里搜 `reproduction entry` / `复现入口`），把包着它的 `<!-- <div id="toggle-block"> … </div> -->` **注释 / 取消注释** 并保存 —— **一般几次（2~5 次）就能命中**，不用存 20 次。
2. **盯横幅**：黄色 `toggle-block is RENDERED …` 横幅本身就在被注释的块里、位于 grid 最前面。把块注释掉并保存后看页面：**横幅还在 = 这次 HMR 被吞了**（什么都没变），这就是要抓的瞬间。
3. 页面上方两行是更细的判据（`0` 只是初始值，**先点几下 `+1`** 才有意义）：`clicked` 不变 = HMR 保住了组件状态；`component mounted at` 变了 = 组件被整体 reload；`last HMR event` 时间不再更新 = 这次保存根本没触发 HMR（被吞掉）。
4. 终端对照：被吞的那次是 `before-vue` 有模块、`after-vue` 是 `[]`、只有 `(client) [no modules matched]`，页面毫无变化。

### 自动复现

```powershell
npm run probe           # 复现：反复注释 toggle-block + 非原子写（实测 15 次里 7~15 次被吞，时序相关）
npm run probe:fixed     # 同一场景 + awaitWriteFinish → 15/15 正常
npm run probe:direct    # 同一场景但一次性写入 → 15/15 正常（反证问题出在"写盘方式"）
npm run probe:template  # 只改 HMR TEST 数字 → 15/15 正常（反证小改动没问题）
```

探针会给每次保存分类（`ok` / `no-payload` / `modules-lost` / `full-reload` / `not-detected`），把明细写到 `probe-output/report.json` 与 `report.log`，只要有被吞的保存，进程退出码就是 `2`。

### 原因与修复

Vite 的 HMR 读文件函数 `readModifiedFile()` **只在读到空内容时才重试**；大文件保存过程中磁盘上有一小段"半截"状态，watcher 事件落在这个窗口里时，Vite 会把半截内容当完整文件用（实测 552KB 夹具里 `ctx.read()` 只读到 276013 / 552027 字符，正好是前一半）。plugin-vue 把这半截描述符缓存进内部 `hmrCache`，下一次事件再跟它比较：半截 ≠ 上次 → 发 payload 但基于截断解析（典型指纹是 payload 里多出 `?vue&type=style...`）；半截 == 上次比较过的内容 → 判定"没有变化" → 返回 `[]` → **client 收不到 payload，页面不更新**。

**修复 A（推荐，一行）**：`vite.config.ts` 里已经写好、注释状态，取消注释即可：

```ts
server: { watch: { awaitWriteFinish: { stabilityThreshold: 150, pollInterval: 10 } } }
```

实测：同一场景从 **15 次里 7~15 次被吞**（每次运行会浮动）变成 **15/15 正常**。

**文件大小的影响**：磁盘上"半截"窗口 = 一次保存的耗时，而耗时随体积增长（本机实测 `fs.writeFile`：157KB 0.80ms / 484KB 1.96ms / 918KB 2.57ms / 1.8MB 5.17ms；VS Code 自己还有额外 I/O，Windows 上还可能叠加杀软/同步盘的扫描）。探针里这个竞态是刻意制造的，所以在任何体积下都会失败（157KB 14/15、484KB 14/15、918KB 12/15），而一次性写入始终正常（`npm run probe:direct`，484KB 0/15）。想自己扫体积：`npm run gen -- --cells=N`（1200≈157KB、3700≈484KB、7000≈918KB）。

**修复 B**：让编辑器原子保存（写临时文件再 rename），实测 15/15 正常。

**上游修复方向**：`readModifiedFile()` 目前只对"空内容"重试，建议把"读取期间内容仍在增长 / mtime 又变化"也纳入重试，或默认开启 `awaitWriteFinish`。本仓库 + `probe-output/report.log` 可直接作为 issue 附件。

### 备注

- 夹具由 `scripts/generate-big-fixture.mjs` 生成，是合成 markup（`c-0-0` + 数字，无内联样式），不含任何真实业务/美术内容。
- 保持最小：依赖只有三个并锁定版本，共 16 个受控文件，夹具一个文件生成；探针只保留复现需要的开关。
- `probe-output/`、`.local/` 已 gitignore。

</details>
