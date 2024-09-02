/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'x-mark': "url('./src/Assets/x_mark.png')",
        'o-mark': "url('./src/Assets/o_mark.png')", 
      }
    },
  },
  plugins: [],
}