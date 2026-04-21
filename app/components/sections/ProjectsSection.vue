<script setup lang="ts">
import type { Project } from '~/types'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import Badge from '~/components/ui/Badge.vue'
import Button from '~/components/ui/Button.vue'

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    category: 'Web App',
    description: 'A fully scalable, multi-vendor electronic commerce solution with real-time inventory.',
  },
  {
    title: 'Fintech Mobile App',
    category: 'Mobile',
    description: 'Secure, fast, and feature-rich app for personal finance management and digital payments.',
  },
  {
    title: 'Corporate Portal',
    category: 'Enterprise',
    description: 'Intranet solution for HR management, document sharing, and team collaboration.',
  },
  {
    title: 'Real Estate Dashboard',
    category: 'UI/UX',
    description: 'Interactive map-based dashboard for property listing and agent tracking.',
  },
  {
    title: 'Healthcare SaaS',
    category: 'Cloud',
    description: 'HIPAA-compliant telemedicine platform connecting doctors and patients.',
  },
  {
    title: 'Retail Analytics AI',
    category: 'Data',
    description: 'Machine learning models predicting inventory needs and retail trends.',
  }
]
</script>

<template>
  <section id="projects" class="py-24 bg-background-dark">
    <div class="container mx-auto px-6">
      <SectionHeading 
        title="Featured Projects" 
        subtitle="A glimpse into the innovative solutions we've delivered for our clients."
        alignment="center"
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        <div 
          v-for="(project, index) in projects" 
          :key="index"
          class="group bg-surface rounded-lg overflow-hidden border border-border-color hover:border-primary-red transition-all duration-300"
        >
          <div class="aspect-video bg-surface-elevated flex items-center justify-center relative overflow-hidden">
            <Icon name="heroicons:photo" class="w-16 h-16 text-text-muted opacity-20" />
            <div class="absolute inset-0 bg-primary-red/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div class="p-6">
            <Badge :label="project.category" class="mb-3" />
            <h3 class="text-xl font-bold text-text-primary mb-2 group-hover:text-primary-red transition-colors">{{ project.title }}</h3>
            <p class="text-text-secondary text-sm leading-relaxed mb-6">
              {{ project.description }}
            </p>
            <Button variant="ghost" size="sm" class="-ml-3" icon="heroicons:arrow-top-right-on-square">
              View Case Study
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
