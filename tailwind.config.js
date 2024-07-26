/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans,serif"]
      },
      colors: {
        1 : "var(--color1)",
        2 : "var(--color2)",
        3 : "var(--color3)",
        4 : "var(--color4)",
        5 : "var(--color5)"
      }
    },
  },
  plugins: [],
}

