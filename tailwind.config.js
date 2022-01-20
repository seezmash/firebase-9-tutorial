const colors = require("tailwindcss/colors")

module.exports = {
  // mode: 'jit',
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      height: {
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
      minHeight: {
        sm: "24rem",
        md: "28rem",
        lg: "32rem",
        xl: "36rem",
      },
      maxWidth: {
        "8xl": "88rem",
      },
      colors: {
        gray: colors.trueGray,
        custom1: "#000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
