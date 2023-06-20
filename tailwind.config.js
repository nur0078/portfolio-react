/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        mulish: ['Mulish', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        cardColor: "#F5F5F5",
        rdrPurp: "#A770EF",
        nur:"#FDB99B",
        // dskBlk: "#2C3E50",
        dskRed: "#FD746C",

      },
    },
  },
  plugins: [],
}