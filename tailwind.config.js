/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/*.js",
    "./pages/**/*.js",
    "./pages/*.jsx",
    "./pages/**/*.jsx",
    "./components/**/*.jsx",
    "./components/**/**/*.jsx",
    "./common/components/**/*.jsx",
    "./common/components/**/**/*.jsx",
    "./common/components/**/**/**/*.jsx",
    "./modules/**/components/**/*.jsx",
    "./modules/**/components/**/**/*.jsx",
    ],  theme: {
    extend: {},
  },
  plugins: [],
}
