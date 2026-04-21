<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label: string
  color?: string
}>(), {
  color: 'red'
})

const colorClass = computed(() => {
  if (props.color === 'red') {
    return 'bg-accent-glow text-primary-red border border-primary-red/20'
  }
  return 'bg-surface-elevated text-text-secondary border border-border-color'
})
</script>

<template>
  <span :class="['inline-flex items-center px-2.5 py-0.5 rounded text-xs font-bold uppercase tracking-wider', colorClass]">
    {{ label }}
  </span>
</template>
