import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

if (import.meta.hot) {
  import.meta.hot.on('vite:beforeUpdate', (payload) => {
    console.log('[TEST] beforeUpdate', performance.now(), payload)
  })

  import.meta.hot.on('vite:afterUpdate', (payload) => {
    console.log('[TEST] afterUpdate', performance.now(), payload)
  })
}

createApp(App).mount('#app')
