/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Kaufmann.Earth color palette
        earth: {
          'deep-green': '#0A5F3C',
          'sky': '#2B7FCC',
          'light-teal': '#4AC7B8',
          'warm-sand': '#F5F0E8',
        },
        // Kaufmann.Health color palette
        health: {
          'light-teal': '#4AC7B8',
        },
        // Semantic color aliases
        primary: {
          DEFAULT: '#0A5F3C',
          dark: '#084d31',
          light: '#0c7147',
          foreground: '#FFFFFF',
        },
        background: {
          DEFAULT: '#ffffff',
        },
        foreground: {
          DEFAULT: '#191A1B', // charcoal or equivalent
        },
        muted: {
          DEFAULT: '#f3f4f6', // gray-light or equivalent
          foreground: '#6b7280', // gray-mid or equivalent
        },
        surface: {
          DEFAULT: '#F5F0E8', // earth-warm-sand or equivalent
        },
        border: {
          DEFAULT: '#E5E7EB', // gray-200 or equivalent
        },
        ring: {
          DEFAULT: '#0A5F3C', // primary or accent color
        },
        secondary: {
          DEFAULT: '#2B7FCC',
          dark: '#2266a3',
          light: '#3f8fd6',
        },
        accent: {
          DEFAULT: '#4AC7B8',
          dark: '#3ba395',
          light: '#6bd2c6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['CalSans', 'sans-serif'],
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'none': 'none',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class',
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
