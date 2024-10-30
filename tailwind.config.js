/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './docs/**/*.html',
  ],
  theme: {
    extend: {
      colors:{
        myYellow:'hsl(47, 88%, 63%)'
      }
    },
  },
  plugins: [],
}

