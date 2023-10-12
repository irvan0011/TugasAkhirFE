/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Include Angular component HTML and TypeScript files
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      // You can extend or customize the default theme here
    },
  },  
  darkMode: "class",
  plugins: [require("tw-elements/dist/plugin.cjs")]
}