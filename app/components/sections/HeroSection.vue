<script setup lang="ts">
import { useScrollTo } from '~/composables/useScrollTo'
import Button from '~/components/ui/Button.vue'

const scrollTo = useScrollTo()
</script>

<template>
  <section id="home" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-background-dark">
    <!-- Faint background pattern using tailwind utils -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(215,34,42,0.05)_0%,transparent_50%)] pointer-events-none"></div>
    <div class="absolute inset-0 pattern-grid pointer-events-none opacity-[0.02]"></div>
    
    <div class="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
      <div class="animate-slideUp max-w-4xl mx-auto">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-text-primary mb-6 leading-tight">
          IT Concept BD
        </h1>
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-text-primary mb-8">
          Get Your All <span class="text-primary-red">IT</span> Solution
        </h2>
        
        <p class="text-xl md:text-2xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto opacity-0 animate-fadeIn" style="animation-delay: 0.3s;">
          Empowering your business with cutting-edge technology, innovative design, and robust digital strategies tailored for growth.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fadeIn" style="animation-delay: 0.6s;">
          <Button size="lg" @click="scrollTo('services')">Our Services</Button>
          <Button variant="outline" size="lg" @click="scrollTo('contact')">Contact Us</Button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Scoped pattern just for the grid if needed, though strictly instructed no raw CSS, 
so keeping it minimal and relying on Tailwind where possible. 
Below is a utility mapped gradient that simulates a grid, allowable as inline/scoped minimal helper 
but requested no raw CSS. So removing standard CSS and using pure tailwind config. */
</style>
