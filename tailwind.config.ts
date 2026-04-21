import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#D7222A',
        'background-dark': '#1C1C1E',
        'surface': '#252528',
        'surface-elevated': '#2E2E32',
        'text-primary': '#F0F0F0',
        'text-secondary': '#A0A0A8',
        'text-muted': '#606068',
        'border-color': '#3A3A40',
        'accent-glow': 'rgba(215, 34, 42, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
      }
    },
  },
  plugins: [],
}
