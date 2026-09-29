<template>
  <main class="app">
    <h1>Vite 8.3.0 + Vue 3.5.24 + @vitejs/plugin-vue 6.0.9 — HMR repro</h1>
    <p class="hint">
      反复保存 <code>src/components/HeavyPanel.vue</code>（约 490KB 的生成 markup），
      观察终端 <code>[DEBUG HMR before-vue]</code> / <code>[DEBUG HMR after-vue]</code>
      与浏览器 <code>[TEST] beforeUpdate</code> / <code>[TEST] afterUpdate</code>。
    </p>
    <HeavyPanel />
  </main>
</template>

<script setup lang="ts">
import HeavyPanel from './components/HeavyPanel.vue'
</script>

<style scoped>
.app {
  padding: 16px;
  font-family: system-ui, sans-serif;
}

.hint {
  color: #555;
  max-width: 90ch;
}

code {
  background: #eee;
  padding: 0 4px;
  border-radius: 3px;
}
</style>
