/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{html,ts}",
  ],
  // purge: [
  //   "./src/**/*.{html,ts}",
  // ],
  theme: {
    extend: {
      // You can extend or customize the default theme here
    },
  },  
  plugins: []
}