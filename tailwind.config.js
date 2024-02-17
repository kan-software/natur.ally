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
      },
      colors: {
        'midnight-purple': {
          light: '#645D93',
          DEFAULT: '#423C66',
          dark: '#241E47',
        },
      },
    },
  },
  plugins: [],
};
