/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#007BFF",
        accent: "#FFA500",
        darkGray: "#333333",
        lightGray: "#F5F5F5",
      },
      fontFamily: {
        helvetica: ["Helvetica", "sans-serif"],
        yekan: ["Yekan", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};