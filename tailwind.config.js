/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Esto habilita el modo oscuro basado en una clase
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bungee: ["Bungee", "cursive"],
      },
      colors: {
        dark: {
          background: "#171717",
          surface: "#2C2C2C",
          text: "#E2E2E2",
          accent: "#FC6B01",
        },
        light: {
          background: "#ffffff",
          surface: "#f8f8f8",
          text: "#171717",
          accent: "#FC6B01",
        },
      },
      boxShadow: {
        "custom-dark":
          "0 4px 6px -1px rgba(252, 107, 1, 0.7), 0 2px 4px -1px rgba(252, 107, 1, 0.06)",
      },
    },
  },
  plugins: [],
};
