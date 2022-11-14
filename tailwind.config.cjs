/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors');

const colors = {
  ...twColors,
  navy: "#0F3460",
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors,
    extend: {
    },
  },
  plugins: [],
}
