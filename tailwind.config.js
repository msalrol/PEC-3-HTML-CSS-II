/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#404040",
      },
      fontFamily: {
        sans: [
          "PPMori-SemiBold",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        regular: ["PPMori-Regular", "sans-serif"],
        light: ["PPMori-Extralight", "sans-serif"],
      },
    },
  },
  plugins: [],
};
