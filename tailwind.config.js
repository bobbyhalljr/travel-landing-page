/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0
          },
          '50%': {
            opacity: 1
          },
        }
      },
      colors: {
        primary: "#611818"
      },
      fontFamily: {
        heading: ['"lato"', 'sans-serif'],
        body: ['"Lato', 'sans-serif']
      }
    },
  },
  plugins: [],
}

