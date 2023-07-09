/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants:{
      backgroundColour:['responsive', 'hover', 'focus', 'active']
  },
  plugins: [],
}

