/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
        secondary: "#64748b",
        accent: "#3b82f6",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
