/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          bg: 'rgb(var(--color-brand-bg) / <alpha-value>)',
          section: 'rgb(var(--color-brand-section) / <alpha-value>)',
          'section-light': 'rgb(var(--color-brand-section-light) / <alpha-value>)',
          accent: 'rgb(var(--color-brand-accent) / <alpha-value>)',
          primary: 'rgb(var(--color-brand-primary) / <alpha-value>)',
          secondary: 'rgb(var(--color-brand-secondary) / <alpha-value>)',
          red: 'rgb(var(--color-brand-primary) / <alpha-value>)', // alias for backward compatibility
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(188, 108, 37, 0.4)',
        'glow-lg': '0 0 40px rgba(188, 108, 37, 0.4)',
      }
    },
  },
  plugins: [],
}
