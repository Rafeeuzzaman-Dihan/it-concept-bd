import { ref, onMounted, onUnmounted } from 'vue'

export const useActiveSection = (sections: string[]) => {
  const activeSection = ref<string>('')
  let observer: IntersectionObserver | null = null

  if (import.meta.client) {
    onMounted(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeSection.value = entry.target.id
            }
          })
        },
        {
          rootMargin: '-50% 0px -50% 0px',
          threshold: 0
        }
      )

      sections.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer?.observe(el)
      })
    })

    onUnmounted(() => {
      if (observer) {
        observer.disconnect()
      }
    })
  }

  return activeSection
}
