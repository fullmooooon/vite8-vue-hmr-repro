<template>
  <p class="slot">{{ config.label }} · slot</p>
</template>

<script setup lang="ts">
import { config } from '../stores/config'
</script>

<style scoped>
.slot {
  color: #666;
  font-size: 13px;
}
</style>
