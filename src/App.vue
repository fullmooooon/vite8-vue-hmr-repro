<template>
  <main class="app">
    <h1>Vite 8.3.1 + Vue 3.5.24 + @vitejs/plugin-vue 6.0.9 — HMR repro</h1>
    <p class="hint">
      Save <code>src/components/HeavyPanel.vue</code> (a ~484 KB generated template) over and over and watch
      the terminal <code>[DEBUG HMR before-vue]</code> / <code>[DEBUG HMR after-vue]</code> lines and the
      browser <code>[TEST] beforeUpdate</code> / <code>[TEST] afterUpdate</code> logs.
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
