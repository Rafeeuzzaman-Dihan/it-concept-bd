<script setup lang="ts">
import type { Stat } from '~/types'
import SectionHeading from '~/components/ui/SectionHeading.vue'

const stats: Stat[] = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '250+' },
  { label: 'Happy Clients', value: '180+' },
  { label: 'Team Members', value: '45+' }
]
</script>

<template>
  <section id="about" class="py-24 bg-surface-elevated">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row gap-16 items-center">
        <!-- Text Content -->
        <div class="lg:w-1/2">
          <SectionHeading 
            title="Who We Are" 
            subtitle="Driving digital transformation for businesses in Bangladesh and beyond."
            alignment="left"
          />
          
          <div class="text-text-secondary text-lg leading-relaxed space-y-6">
            <p>
              IT Concept BD was founded with a singular vision: to empower modern businesses through innovative, scalable, and secure technology solutions. Based in the heart of Dhaka, we blend local insights with global standards to deliver exceptional value to our clients.
            </p>
            <p>
              Our team of dedicated engineers, designers, and strategists are passionate about solving complex problems. Whether it's building a bespoke enterprise platform or launching a disruptive mobile app, we act as your trusted technology partner every step of the way.
            </p>
          </div>
          
          <div class="mt-8">
            <ul class="space-y-4">
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-accent-glow flex items-center justify-center text-primary-red">
                  <Icon name="heroicons:check" class="w-5 h-5" />
                </div>
                <span class="text-text-primary font-medium tracking-wide">Client-Centric Approach</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-accent-glow flex items-center justify-center text-primary-red">
                  <Icon name="heroicons:check" class="w-5 h-5" />
                </div>
                <span class="text-text-primary font-medium tracking-wide">Agile Development Methodology</span>
              </li>
              <li class="flex items-center gap-3">
                <div class="w-8 h-8 rounded-full bg-accent-glow flex items-center justify-center text-primary-red">
                  <Icon name="heroicons:check" class="w-5 h-5" />
                </div>
                <span class="text-text-primary font-medium tracking-wide">Post-Launch Support & Maintenance</span>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Stats Grid -->
        <div class="lg:w-1/2 w-full">
          <div class="grid grid-cols-2 gap-6 relative">
            <div class="absolute -inset-4 bg-primary-red/5 rounded-3xl blur-2xl"></div>
            
            <div 
              v-for="(stat, index) in stats" 
              :key="index"
              class="relative bg-surface border border-border-color p-8 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg hover:-translate-y-1 transition-transform duration-300"
            >
              <span class="text-4xl md:text-5xl font-bold text-primary-red mb-2">{{ stat.value }}</span>
              <span class="text-text-secondary font-medium tracking-wide text-sm uppercase">{{ stat.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
