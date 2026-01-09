/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TT Hoves", "system-ui", "sans-serif"],
        pro: ["TT Hoves Pro", "sans-serif"],
      },
      colors: {
        customBlue: "#031555",
        customPink: "#ED044C",
      },
      container: {
        center: true,
      },
      spacing: {
        "num-32_7": "32.7px",
        "num-33_4": "33.4px",
        "num-878_1": "878.1px",
      },
      screens: {
        xs: [{ min: "280px", max: "300px" }],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
