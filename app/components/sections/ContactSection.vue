<script setup lang="ts">
import { ref } from 'vue'
import SectionHeading from '~/components/ui/SectionHeading.vue'
import Button from '~/components/ui/Button.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)
const submitSuccess = ref(false)

const handleSubmit = () => {
  isSubmitting.value = true
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false
    submitSuccess.value = true
    
    // Reset form
    form.value = { name: '', email: '', subject: '', message: '' }
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false
    }, 5000)
  }, 1500)
}
</script>

<template>
  <section id="contact" class="py-24 bg-background-dark">
    <div class="container mx-auto px-6">
      <SectionHeading 
        title="Get In Touch" 
        subtitle="Ready to start your next big project? Let's talk about how we can help."
        alignment="center"
      />
      
      <div class="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-6xl mx-auto">
        <!-- Contact Info -->
        <div class="lg:w-1/3">
          <div class="bg-surface p-8 rounded-2xl border border-border-color shadow-lg">
            <h3 class="text-2xl font-bold text-text-primary mb-8">Contact Information</h3>
            
            <div class="space-y-8">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0">
                  <Icon name="heroicons:map-pin" class="w-6 h-6 text-primary-red" />
                </div>
                <div>
                  <h4 class="text-sm uppercase tracking-wider font-bold text-text-secondary mb-1">Our Office</h4>
                  <p class="text-text-primary leading-relaxed">Level 4, IT Park Building<br/>Banani, Dhaka 1213<br/>Bangladesh</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0">
                  <Icon name="heroicons:phone" class="w-6 h-6 text-primary-red" />
                </div>
                <div>
                  <h4 class="text-sm uppercase tracking-wider font-bold text-text-secondary mb-1">Phone Number</h4>
                  <p class="text-text-primary">+880 1234 567890</p>
                  <p class="text-text-primary">+880 9876 543210</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-surface-elevated flex items-center justify-center shrink-0">
                  <Icon name="heroicons:envelope" class="w-6 h-6 text-primary-red" />
                </div>
                <div>
                  <h4 class="text-sm uppercase tracking-wider font-bold text-text-secondary mb-1">Email Address</h4>
                  <p class="text-text-primary">info@itconceptbd.com</p>
                  <p class="text-text-primary">support@itconceptbd.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact Form -->
        <div class="lg:w-2/3">
          <form @submit.prevent="handleSubmit" class="bg-surface p-8 rounded-2xl border border-border-color shadow-lg">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label for="name" class="block text-sm font-medium text-text-secondary mb-2">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name" 
                  required
                  class="w-full bg-surface-elevated border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-text-secondary mb-2">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email" 
                  required
                  class="w-full bg-surface-elevated border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div class="mb-6">
              <label for="subject" class="block text-sm font-medium text-text-secondary mb-2">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                required
                class="w-full bg-surface-elevated border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors"
                placeholder="Project Inquiry"
              />
            </div>
            
            <div class="mb-6">
              <label for="message" class="block text-sm font-medium text-text-secondary mb-2">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                required
                rows="5"
                class="w-full bg-surface-elevated border border-border-color rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-primary-red focus:ring-1 focus:ring-primary-red transition-colors resize-y"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>
            
            <div class="flex items-center justify-between">
              <Button type="submit" :disabled="isSubmitting" size="lg" :icon="isSubmitting ? 'heroicons:arrow-path' : 'heroicons:paper-airplane'">
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </Button>
              
              <p v-if="submitSuccess" class="text-green-500 font-medium flex items-center gap-2 animate-fadeIn">
                <Icon name="heroicons:check-circle" class="w-5 h-5" />
                Message sent successfully!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
