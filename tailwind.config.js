/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["TT Hoves"],
        pro: ["TT Hoves Pro"],
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
      keyframes: {
        glowpulse: {
          "0%": {
            boxShadow: "0 0 0 0 rgba(96,141,255,0.7)",
          },
          "50%": {
            boxShadow: "0 0 0 30px rgba(96,141,255,0.25)", // 🔼 өсгөсөн (20 → 30)
          },
          "100%": {
            boxShadow: "0 0 0 50px rgba(96,141,255,0)", // 🔼 илүү том цацралт
          },
          "50%": {
            boxShadow: "0 0 0 40px rgba(96,141,255,0.2)",
          },
          "100%": {
            boxShadow: "0 0 0 70px rgba(96,141,255,0)",
          },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        shimmer: "shimmer 1.5s linear infinite",
        glowpulse: "glowpulse 1.5s infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
