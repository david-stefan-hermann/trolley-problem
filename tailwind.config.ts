import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['var(--font-playpen-sans)'],
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
export default config
