/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#2b2b2b",    // Rich dark background
        gold: "#d4af37",    // Premium gold for accents
        lightGold: "#f5e6a7", // Soft gold for highlights
        yellow: "#ffdc73",  // Bright yellow for interactive elements
        text: "#ffffff",    // Clean white for readability
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
