/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
        'primary-light': '#A29BFE',
        sidebar: '#F8F8FB',
        card: '#FFFFFF',
        accent: {
          pink: '#FD79A8',
          green: '#00B894',
          orange: '#FDCB6E',
          blue: '#0984E3',
          purple: '#6C5CE7',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Sora', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 20px rgba(108, 92, 231, 0.08)',
        'card-hover': '0 8px 30px rgba(108, 92, 231, 0.15)',
      },
    },
  },
  plugins: [],
}
