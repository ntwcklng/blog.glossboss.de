/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
    "./components/ui/**/*.{html,js}",
    "./utils/**/*.{js,html}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3"
      },
      colors: {
        gray: colors.neutral
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography")
  ]
};
