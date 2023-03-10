/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#0370d0",
        "custom-blue-hover": "#02549c",
        "custom-red": "#d02743",
        "custom-red-hover": "#b33348",
      },
      screens: {
        "custom-sm": "430px",
        "custom-sm-2": "330px",
      },
    },
  },
  plugins: [],
};
