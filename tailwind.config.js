/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ["'Work Sans'", 'sans-serif'],
        secondary: ["'Inter'", 'sans-serif'],
        tertiary: ["'Rubik'", 'sans-serif'],
      },
      fontSize: {
        base: ['1rem', '1.25rem'],
        sm: ['0.875rem', '1.125rem'],
        xl: ['1.25rem', '1.5rem'],
        '2xl': ['1.5rem', '1.75rem'],
        '4xl': ['2rem', '2.375rem'],
      },
      colors: {
        'midnight-purple': {
          light: '#645D93',
          DEFAULT: '#423C66',
          dark: '#241E47',
        },
        'midnight-gray': '#4D6475',
        'blue-gray': {
          50: '#E9EEF2',
          900: '#1E2A32',
        },
        salmon: '#FFDBCB',
      },
      boxShadow: {
        card: '0px 16px 32px 0px #1E2A3214',
      },
    },
  },
  plugins: [],
};
