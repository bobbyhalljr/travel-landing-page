/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#611818"
      },
      fontFamily: {
        heading: ['"Didot"', 'sans-serif'],
        body: ['"Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

