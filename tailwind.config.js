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
        inter: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },

      fontSize: {
        "4xl": ["2.25rem", { lineHeight: "2.5rem", letterSpacing: "-0.02em" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem", letterSpacing: "-0.01em" }],
        "2xl": ["1.5rem", { lineHeight: "2rem", letterSpacing: "-0.005em" }],
        "xl": ["1.25rem", { lineHeight: "1.75rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
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
