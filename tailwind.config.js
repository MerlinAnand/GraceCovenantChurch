/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './App.tsx',
    './index.tsx',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'brand-blue': '#1a365d',
        'brand-dark-blue': '#0a1929',
        'brand-gold': '#d4af37',
        'brand-cream': '#fdfbf7',
        'brand-gray': '#e5e7eb',
        'brand-teal': '#0d9488',
        'brand-navy': '#1e3a5f',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-hero': 'linear-gradient(135deg, rgba(10, 25, 41, 0.95) 0%, rgba(26, 54, 93, 0.85) 50%, rgba(30, 58, 95, 0.90) 100%)',
      },
      boxShadow: {
        soft: '0 2px 15px rgba(0, 0, 0, 0.08)',
        glow: '0 0 30px rgba(212, 175, 55, 0.2)',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'gentle-float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 1s ease-out',
        'fade-in-up': 'fade-in-up 1s ease-out 0.3s both',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'gentle-float': 'gentle-float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
