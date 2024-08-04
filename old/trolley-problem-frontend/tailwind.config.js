/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'indie': ['Indie Flower', 'sans-serif'],                // Name it as 'indie' or any name you prefer
        'annie': ['Annie Use Your Telescope', 'sans-serif'],    // Name it as 'annie' or any name you prefer
        'playpen': ['Playpen Sans', 'sans-serif']               // Name it as 'playopen' or any name you prefer
      },
      screens: {
        'betterhover': { 'raw': '(hover: hover)' },
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true
  }
}
