/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#edaf05", // Light gray-white background F1F1F1
        text: "#fcf8ed",       // Grayish white for text D8D8D8
        hover: "#262625",       // Dark gold for main elements D69B2E
        gray: "#e0dac8",     // Dark gray for accents 3A3A3A
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
