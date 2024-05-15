/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll-right": "loop-scroll-right 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" }
        },
        "loop-scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" }
        },
      },
      colors: {
        'primary': '#131419',
        'secondary': '#D9F19E',
        'label': '#CEB843'
      },
      fontFamily: {
        'bai-jamjuree': ['"Poppins"', 'sans-serif'],
        'neue-power': ['"Neue Power"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

