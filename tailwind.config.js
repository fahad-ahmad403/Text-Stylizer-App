/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "backgroundColor": "rgb(var(--bgc))",
        "textColor": "rgb(var(--tc))",
        "buttonBg": "rgb(var(--bbc))",
        "buttonText": "rgb(var(--btc))",
        "inputColor": "rgb(var(--ic))",
        "secBtnBg": "rgb(var(--secBtc))",
        "containerBg": "rgb(var(--cbg))",
      }
    },
  },
  plugins: [],
}

