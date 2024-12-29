/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050504",
        medium: "#333333",
        light: "#bdbbbb",
        text: "#e0dada",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
      
    },
  },
  plugins: [],
  safelist: [
    'clip-light', // Safelist to prevent it from being purged
  ],
}
