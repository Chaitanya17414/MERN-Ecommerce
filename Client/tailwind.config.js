/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': {'min': '320px', 'max': '425px'},
      'md': {'min': '426px', 'max': '768px'},
      'lg': {'min': '769px', 'max': '1024px'},
      'xl': {'min': '1025px'},
    },
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
}