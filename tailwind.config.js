/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // Enables class-based dark mode

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      /* GLOBAL FONT */
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      /* CUSTOM COLORS (Optional for cards, accents, gradients) */
      colors: {
        pastel1: "#c5ffe7", // soft mint
        pastel2: "#b9ddff", // soft sky blue
        pastel3: "#d5caff", // soft lavender
      },

      /* OPTIONAL: Custom gradients if needed later */
      backgroundImage: {
        "light-gradient": "linear-gradient(to bottom right, white, #e0f2ff)",
        "dark-gradient": "linear-gradient(to bottom right, #0f172a, #1e3a8a)",
      },
    },
  },

  plugins: [],
};
