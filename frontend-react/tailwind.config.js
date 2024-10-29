/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "floating": "floating 10s linear infinite",
      },
      keyframes: {
        floating: {
          '0%': {transform: 'translatey(0px)'},
          '50%': {transform: 'translatey(-20px)'},
          '100%': {transform: 'translatey(0px)'}
        }
      }
    },
  },
  plugins: [],
};