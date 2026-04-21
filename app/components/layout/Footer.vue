<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-surface py-12 border-t border-border-color mt-auto">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div class="md:col-span-2">
          <a href="#" class="text-2xl font-bold tracking-tight text-text-primary flex items-center gap-3 group">
            <img src="/logo.jpeg" alt="IT Concept BD Logo" class="h-14 w-auto object-contain rounded" />
          </a>
          <p class="pt-2 text-text-secondary text-sm max-w-sm leading-relaxed">
            Delivering top-tier IT solutions and digital excellence for modern businesses. Build your future with our expertise.
          </p>
        </div>
        
        <div>
          <h4 class="text-text-primary font-bold mb-4 uppercase tracking-wider text-sm">Quick Links</h4>
          <ul class="space-y-2 text-sm text-text-secondary">
            <li><a href="#services" class="hover:text-primary-red transition-colors">Services</a></li>
            <li><a href="#projects" class="hover:text-primary-red transition-colors">Projects</a></li>
            <li><a href="#about" class="hover:text-primary-red transition-colors">About Us</a></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-text-primary font-bold mb-4 uppercase tracking-wider text-sm">Contact Info</h4>
          <ul class="space-y-2 text-sm text-text-secondary">
            <li class="flex items-start gap-2">
              <Icon name="heroicons:map-pin" class="w-4 h-4 mt-0.5 text-primary-red" />
              <span>Dhaka, Bangladesh</span>
            </li>
            <li class="flex items-start gap-2">
              <Icon name="heroicons:envelope" class="w-4 h-4 mt-0.5 text-primary-red" />
              <span>info@itconceptbd.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="pt-8 border-t border-border-color text-center md:flex md:justify-between md:text-left">
        <p class="text-text-muted text-sm">&copy; {{ currentYear }} IT Concept BD. All rights reserved.</p>
        <div class="mt-4 md:mt-0 flex items-center justify-center gap-4">
          <a href="#" class="text-text-muted hover:text-primary-red transition-colors">
            <span class="sr-only">Facebook</span>
            <Icon name="mdi:facebook" class="w-5 h-5" />
          </a>
          <a href="#" class="text-text-muted hover:text-primary-red transition-colors">
            <span class="sr-only">LinkedIn</span>
            <Icon name="mdi:linkedin" class="w-5 h-5" />
          </a>
          <a href="#" class="text-text-muted hover:text-primary-red transition-colors">
            <span class="sr-only">Twitter</span>
            <Icon name="mdi:twitter" class="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
