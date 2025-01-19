/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        backgroundColor: "rgb(var(--bgc))",
        textColor: "rgb(var(--tc))",
        buttonBg: "rgb(var(--bbc))",
        buttonText: "rgb(var(--btc))",
        inputColor: "rgb(var(--ic))",
        secBtnBg: "rgb(var(--secBtc))",
        containerBg: "rgb(var(--cbg))",
        hoverBtnBg: "rgb(var(--hbbc))",
      },
      screens: {
        xs: "360px",
        // => @media (min-width: 640px) { ... }

        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "880px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
};

