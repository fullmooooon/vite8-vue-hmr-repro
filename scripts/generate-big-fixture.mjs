#!/usr/bin/env node
/**
 * 生成“大 SFC”测试夹具：src/components/HeavyPanel.vue
 *
 * 目的：造一个体积足够大的普通 Vue SFC（默认 ~500KB 的生成 markup，无任何业务/原创内容），
 * 用来复现「大文件非原子保存 → Vite 读到半截文件 → HMR 被吞」的问题。
 *
 * 用法：
 *   node scripts/generate-big-fixture.mjs            # 默认 2600 个 cell（约 500KB）
 *   node scripts/generate-big-fixture.mjs --cells=2600
 *
 * 输出是确定性的（固定随机种子），重复生成结果一致。
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const OUT = path.join(ROOT, 'src/components/HeavyPanel.vue')

const cellsArg = process.argv.find((a) => a.startsWith('--cells='))
const CELLS = Number(cellsArg?.split('=')[1] ?? 2600)
const TOGGLE_FROM = Math.floor(CELLS * 0.12)
const TOGGLE_TO = Math.floor(CELLS * 0.34)

function mulberry32(seed) {
  return function () {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const rand = mulberry32(20260929)
const hex = () => Math.floor(rand() * 0xffffff).toString(16).padStart(6, '0')

function cell(row, col) {
  const id = `c-${row}-${col}`
  const value = (rand() * 100).toFixed(2)
  return (
    `        <div class="cell" data-cell="${id}">` +
    `<span class="cell__label">${id}</span>` +
    `<span class="cell__value">${value}</span>` +
    `<span class="cell__tint" style="background:#${hex()}"></span>` +
    `</div>`
  )
}

const body = []
for (let row = 0; row < Math.ceil(CELLS / 20); row++) {
  body.push(`      <div class="row" data-row="r-${row}">`)
  for (let col = 0; col < 20 && row * 20 + col < CELLS; col++) {
    const index = row * 20 + col
    if (index === TOGGLE_FROM) body.push('      <!-- <div id="toggle-block">')
    if (index === TOGGLE_TO) {
      body.push('      </div> -->')
      body.push('      <div id="after-toggle"></div>')
    }
    body.push(cell(row, col))
  }
  body.push('      </div>')
}

const sfc = `<template>
  <section class="heavy-panel" :data-tick="probeTick">
    <h2>HeavyPanel</h2>
    <p class="hmr-marker">HMR TEST 1</p>
    <p class="state">
      组件状态（HMR 是否保留了它）：<b>{{ count }}</b>
      <button type="button" @click="bump">+1</button>
    </p>
    <div class="grid">
${body.join('\n')}
    </div>
    <Slot v-if="showSlot" />
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Slot from './Slot.vue'
import { config } from '../stores/config'

/** 供脚本块编辑测试使用。 */
const probeTick = 1
const count = ref(0)
const showSlot = config.showSlot

function bump() {
  count.value += 1
}
</script>

<style scoped>
.heavy-panel {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
}

.hmr-marker {
  font-weight: 700;
  letter-spacing: 0.05em;
}

.grid {
  margin-top: 8px;
}

.row {
  display: flex;
  gap: 4px;
}

.cell {
  border: 1px solid #ddd;
  padding: 2px 4px;
  font-size: 11px;
}
</style>
`

await writeFile(OUT, sfc, 'utf8')
const bytes = Buffer.byteLength(sfc, 'utf8')
console.log(
  `generated ${path.relative(ROOT, OUT)}: ${(bytes / 1024).toFixed(1)} KiB, ${CELLS} cells, ` +
    `toggle block = cells ${TOGGLE_FROM}..${TOGGLE_TO}`,
)
