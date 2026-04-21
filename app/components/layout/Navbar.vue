<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollTo } from '~/composables/useScrollTo'
import { useActiveSection } from '~/composables/useActiveSection'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const scrollTo = useScrollTo()

const navLinks = [
  { name: 'Home', target: 'home' },
  { name: 'Services', target: 'services' },
  { name: 'Projects', target: 'projects' },
  { name: 'About', target: 'about' },
  { name: 'Contact', target: 'contact' }
]

const activeSection = useActiveSection(navLinks.map(l => l.target))

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleNavClick = (target: string) => {
  scrollTo(target)
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header 
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300',
      isScrolled ? 'bg-background-dark/90 backdrop-blur-md shadow-lg border-b border-border-color/50 py-3' : 'bg-transparent py-5'
    ]"
  >
    <div class="container mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a href="#" @click.prevent="handleNavClick('home')" class="text-2xl font-bold tracking-tight text-text-primary flex items-center gap-3 group">
        <img src="/logo.jpeg" alt="IT Concept BD Logo" class="h-12 w-auto object-contain rounded" />
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a 
          v-for="link in navLinks" 
          :key="link.target"
          href="#" 
          @click.prevent="handleNavClick(link.target)"
          :class="[
            'text-sm font-medium transition-colors relative duration-200',
            activeSection === link.target 
              ? 'text-primary-red' 
              : 'text-text-secondary hover:text-text-primary'
          ]"
        >
          {{ link.name }}
          <span 
            v-if="activeSection === link.target" 
            class="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-red rounded-full"
          ></span>
        </a>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button 
        @click="isMobileMenuOpen = !isMobileMenuOpen" 
        class="md:hidden text-text-primary focus:outline-none"
        aria-label="Toggle menu"
      >
        <Icon :name="isMobileMenuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-7 h-7" />
      </button>
    </div>

    <!-- Mobile Nav Overlay -->
    <div 
      v-show="isMobileMenuOpen" 
      class="md:hidden absolute top-full left-0 w-full bg-surface-elevated border-b border-border-color shadow-xl"
    >
      <div class="flex flex-col py-4 px-6 gap-4">
        <a 
          v-for="link in navLinks" 
          :key="link.target"
          href="#" 
          @click.prevent="handleNavClick(link.target)"
          :class="[
            'text-lg font-medium py-2 border-b border-border-color/50 last:border-0',
            activeSection === link.target 
              ? 'text-primary-red' 
              : 'text-text-secondary'
          ]"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </header>
</template>
