/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '375px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'light-gray': '#D6E2F0FF',
      'blue': '#7B879DFF',
      'dark-blue': '#1F3251FF',
    },
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [],
}
