/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",

  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        pastel1: "#c5ffe7",
        pastel2: "#b9ddff",
        pastel3: "#d5caff",
      },

      backgroundImage: {
        "light-gradient": "linear-gradient(to bottom right, white, #e0f2ff)",
        "dark-gradient": "linear-gradient(to bottom right, #0f172a, #1e3a8a)",
      },
    },
  },

  plugins: [],
};
