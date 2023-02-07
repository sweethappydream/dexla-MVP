/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend:{
      colors: {
        "bar-bg": "#F9F9F9",
        green: "#10D48E",
        "hover": "#132A3A"
      },
    }
  },
  plugins: [],
}
