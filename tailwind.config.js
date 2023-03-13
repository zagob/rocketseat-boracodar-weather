/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/images/Background.png')",
        backgroundTemperature: "url('/images/temperature.png')",
      },
    },
  },
  plugins: [],
};
