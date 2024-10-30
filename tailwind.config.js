/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f7ff',
          100: '#e0f0ff',
          200: '#bae2ff',
          300: '#7cc8ff',
          400: '#38b6ff',
          500: '#0098ff',
          600: '#0077ff',
          700: '#0055cc',
          800: '#004299',
          900: '#003166',
        },
        surface: {
          light: 'rgba(255, 255, 255, 0.95)',
          DEFAULT: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(0, 0, 0, 0.8)',
        },
      },
    },
  },
  plugins: [],
};