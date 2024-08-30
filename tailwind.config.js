const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      sans: ["Poppins", ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
