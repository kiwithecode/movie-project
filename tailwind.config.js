/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Esto habilita el modo oscuro basado en una clase
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: '#171717',
          surface: '#2C2C2C',
          text: '#E2E2E2',
          accent: '#FC6B01',
        },
        light: {
          background: '#ffffff',
          surface: '#f8f8f8',
          text: '#171717',
          accent: '#FC6B01',
        },
      },
    },
  },
  plugins: [],
}
