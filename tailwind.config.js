/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screen:{
        "sm":"350px",
        "md":"500px",
        "lg":"640px",
        "xl":"1024px",
        "2xl":"1280",
      }
    },
  },
  plugins: [],
}

