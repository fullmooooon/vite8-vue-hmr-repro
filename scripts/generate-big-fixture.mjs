#!/usr/bin/env node
/**
 * Generate the big-SFC fixture: src/components/HeavyPanel.vue
 *
 * Purpose: produce a large, ordinary Vue SFC (~484 KB of generated markup, no real
 * business or artwork content) to reproduce "non-atomic save of a big file → Vite
 * reads a half-written file → the HMR update is swallowed".
 *
 * Usage:
 *   node scripts/generate-big-fixture.mjs             # default: 3700 cells (~484 KB)
 *   node scripts/generate-big-fixture.mjs --cells=6000
 *
 * Output is deterministic (fixed seed): regenerating produces identical bytes.
 */

import { writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)))
const OUT = path.join(ROOT, 'src/components/HeavyPanel.vue')

const cellsArg = process.argv.find((a) => a.startsWith('--cells='))
// default keeps the generated SFC at roughly 490 KiB (plain markup, no inline styles)
const CELLS = Number(cellsArg?.split('=')[1] ?? 3700)
const COLS = 20
const ROWS = Math.ceil(CELLS / COLS)
// The toggle block sits at the very beginning of the grid, on whole row
// boundaries, so commenting it out keeps the remaining markup balanced.
const TOGGLE_FROM_ROW = 0
const TOGGLE_TO_ROW = Math.max(1, Math.round(ROWS * 0.22))

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

function cell(row, col) {
  const id = `c-${row}-${col}`
  const value = (rand() * 100).toFixed(2)
  return (
    `        <div class="cell" data-cell="${id}">` +
    `<span class="cell__label">${id}</span>` +
    `<span class="cell__value">${value}</span>` +
    `</div>`
  )
}

const body = []
for (let row = 0; row < Math.ceil(CELLS / 20); row++) {
  if (row === TOGGLE_FROM_ROW) {
    body.push('      <!-- reproduction entry: comment / uncomment this toggle-block, then save -->')
    body.push('      <!-- <div id="toggle-block">')
    body.push(
      '      <div class="row row--banner" data-banner="toggle-block"><span class="banner">' +
        'toggle-block is RENDERED — comment it out and save; if this banner is still here, that save was swallowed' +
        '</span></div>',
    )
  }
  body.push(`      <div class="row" data-row="r-${row}">`)
  for (let col = 0; col < COLS && row * COLS + col < CELLS; col++) {
    const index = row * 20 + col
    body.push(cell(row, col))
  }
  body.push('      </div>')
  if (row === TOGGLE_TO_ROW) {
    body.push('      </div> -->')
    body.push('      <div id="after-toggle"></div>')
  }
}

const sfc = `<template>
  <section class="heavy-panel" :data-tick="probeTick">
    <h2>HeavyPanel</h2>
    <p class="hmr-marker">HMR TEST 1</p>
    <p class="hmr-state">
      clicked = <b>{{ count }}</b>
      <button type="button" @click="bump">+1</button>
      · component mounted at = {{ mountedAt }}
      · last HMR event = {{ hmrLog || '(none yet)' }}
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

/** Used by the probe's script-block edit mode. */
const probeTick = 1
const count = ref(0)
const showSlot = config.showSlot
const mountedAt = new Date().toLocaleTimeString()
const hmrLog = ref('')

function bump() {
  count.value += 1
}

// Show the last HMR event on the page; a swallowed save produces no event and no reload.
if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', () => {
    hmrLog.value = 'beforeUpdate ' + new Date().toLocaleTimeString()
  })
  import.meta.hot.on('vite:afterUpdate', () => {
    hmrLog.value = 'afterUpdate ' + new Date().toLocaleTimeString()
  })
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

.hmr-state {
  font-size: 13px;
}

.grid {
  margin-top: 8px;
}

.row {
  display: flex;
  gap: 4px;
}

.row--banner .banner {
  border: 1px solid #cc0;
  background: #ffd;
  padding: 2px 6px;
  font-weight: 700;
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
    `toggle block = rows ${TOGGLE_FROM_ROW}..${TOGGLE_TO_ROW} (first ${(TOGGLE_TO_ROW + 1) * COLS} cells)`,
)
