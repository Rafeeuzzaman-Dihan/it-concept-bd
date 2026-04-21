<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  label?: string
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: string
}>(), {
  variant: 'primary',
  size: 'md'
})

const baseClass = 'inline-flex items-center justify-center font-bold tracking-tight rounded transition-all duration-200 focus:outline-none'

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'sm': return 'px-3 py-1.5 text-sm'
    case 'lg': return 'px-6 py-3 text-lg'
    default: return 'px-4 py-2 text-base'
  }
})

const variantClasses = computed(() => {
  switch (props.variant) {
    case 'primary': return 'bg-primary-red text-text-primary hover:bg-opacity-90 shadow-md hover:shadow-lg hover:-translate-y-0.5'
    case 'outline': return 'border-2 border-primary-red text-primary-red hover:bg-primary-red hover:text-text-primary'
    case 'ghost': return 'text-text-primary hover:bg-surface-elevated hover:text-primary-red'
  }
})
</script>

<template>
  <button :class="[baseClass, sizeClasses, variantClasses]">
    <Icon v-if="icon" :name="icon" class="mr-2 h-5 w-5" aria-hidden="true" />
    <slot>{{ label }}</slot>
  </button>
</template>
