<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  subtitle?: string
  alignment?: 'left' | 'center'
}>(), {
  alignment: 'center'
})

const alignmentClass = computed(() => {
  return props.alignment === 'center' ? 'text-center items-center' : 'text-left items-start'
})
</script>

<template>
  <div class="flex flex-col mb-12" :class="alignmentClass">
    <div class="inline-flex items-center gap-2 mb-2">
      <div class="w-8 h-1 bg-primary-red rounded-full"></div>
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">{{ title }}</h2>
    </div>
    <p v-if="subtitle" class="text-text-secondary text-lg max-w-2xl mt-2 leading-relaxed">
      {{ subtitle }}
    </p>
  </div>
</template>
