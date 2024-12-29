/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "serif"],
        inter: ["Inter", "serif"],
      },
      boxShadow: {
        btn: "0px 0px 5px ",
      },
    },
  },
  plugins: [],
}
