module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      top: {
        "1/5": "20%",
      },
      width: {
        "50ch": "50ch",
        "60ch": "60ch",
        "70ch": "70ch",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
