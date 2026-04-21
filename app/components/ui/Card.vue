<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  title: string
  description: string
  icon?: string
  variant?: 'default' | 'bordered'
}>(), {
  variant: 'default'
})

const variantClass = computed(() => {
  if (props.variant === 'bordered') {
    return 'border border-border-color bg-surface hover:border-primary-red'
  }
  return 'bg-surface hover:bg-surface-elevated shadow-lg'
})
</script>

<template>
  <div 
    :class="[
      'group relative flex flex-col p-6 rounded-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl overflow-hidden',
      variantClass
    ]"
  >
    <!-- Hover red top border indicator -->
    <div class="absolute top-0 left-0 w-full h-1 bg-primary-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
    
    <div v-if="icon" class="w-14 h-14 rounded bg-surface-elevated flex items-center justify-center mb-6 group-hover:bg-accent-glow group-hover:text-primary-red transition-colors duration-300 text-text-primary">
      <Icon :name="icon" class="w-8 h-8" />
    </div>
    
    <h3 class="text-xl font-bold text-text-primary mb-3">{{ title }}</h3>
    <p class="text-text-secondary leading-relaxed flex-grow">{{ description }}</p>
    
    <slot name="footer"></slot>
  </div>
</template>
