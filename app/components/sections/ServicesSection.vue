<script setup lang="ts">
import type { Service } from '~/types'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import Card from '~/components/ui/Card.vue'

const services: Service[] = [
  {
    title: 'Web Development',
    description: 'Custom, high-performance websites and web applications built with modern frameworks.',
    icon: 'heroicons:code-bracket-square'
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile experiences that engage users on the go.',
    icon: 'heroicons:device-phone-mobile'
  },
  {
    title: 'UI/UX Design',
    description: 'Intuitive, pixel-perfect designs focused on user engagement and conversion.',
    icon: 'heroicons:paint-brush'
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to elevate your brand visibility and ROI.',
    icon: 'heroicons:megaphone'
  },
  {
    title: 'IT Consulting',
    description: 'Strategic technology advisory to streamline operations and foster innovation.',
    icon: 'heroicons:light-bulb'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud architecture to ensure security, reliability, and speed.',
    icon: 'heroicons:cloud'
  }
]
</script>

<template>
  <section id="services" class="py-24 bg-surface-elevated">
    <div class="container mx-auto px-6">
      <SectionHeading 
        title="Our Services" 
        subtitle="Comprehensive digital solutions designed to transform your ideas into reality."
        alignment="center"
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div v-for="(service, index) in services" :key="index" class="animate-fadeIn" :style="{ animationDelay: `${index * 0.1}s` }">
          <Card 
            :title="service.title"
            :description="service.description"
            :icon="service.icon"
          />
        </div>
      </div>
    </div>
  </section>
</template>
