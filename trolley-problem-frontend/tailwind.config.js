/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'indie': ['Indie Flower', 'cursive'], // Name it as 'indie' or any name you prefer
        'annie': ['Annie Use Your Telescope', 'cursive'], // Name it as 'annie' or any name you prefer
        'playopen': ['Playopen Sans', 'cursive'] // Name it as 'playopen' or any name you prefer
      }
    },
  },
  plugins: [],
}

