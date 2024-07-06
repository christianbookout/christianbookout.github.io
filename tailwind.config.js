/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      // https://colorhunt.co/palette/405d72758694f7e7dcfff8f3
      dark: "#405D72",
      mid: "#758694",
      beige: "#F7E7DC",
      light: "#FFF8F3",
    },
    extend: {
      fill: (theme) => theme("colors"),
    },
  },
  plugins: [],
};
