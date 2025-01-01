/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor:{
      test:"red",
      primaryGray:"#284b63",
      primaryBlue:"#03045e",
      lightBlue: "#0077b6",
      white: "#FFFFFF",
    },
    borderRadius:{
      10:"10px",
      15:"15px",
      20:"20px",
      full:"50%",
    },
    colors:{
      primaryBlue:"#03045e",
      white:"white",
    },
    extend: {},
  },
  plugins: [],
}