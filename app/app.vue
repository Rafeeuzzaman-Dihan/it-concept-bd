<script setup lang="ts">
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
import HeroSection from '~/components/sections/HeroSection.vue'
import ServicesSection from '~/components/sections/ServicesSection.vue'
import ProjectsSection from '~/components/sections/ProjectsSection.vue'
import AboutSection from '~/components/sections/AboutSection.vue'
import ContactSection from '~/components/sections/ContactSection.vue'

useHead({
  title: 'IT Concept BD - Get Your All IT Solution',
  meta: [
    { name: 'description', content: 'IT Concept BD provides top-tier IT solutions including Web Development, Mobile Apps, UI/UX Design, and digital marketing.' },
    { name: 'theme-color', content: '#1C1C1E' }
  ],
  htmlAttrs: {
    lang: 'en'
  },
  bodyAttrs: {
    class: 'font-sans bg-background-dark text-text-primary antialiased selection:bg-primary-red/30 selection:text-text-primary scroll-smooth'
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    
    <main class="flex-grow">
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>

    <Footer />
  </div>
</template>

<style>
/* 
  Global base styles. 
  Following rules: no complex raw CSS, relying on tailwind. 
  These are just essential resets or scroll-behavior utilities if scroll-smooth class isn't enough. 
*/
html {
  scroll-behavior: smooth;
}
</style>