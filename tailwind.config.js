/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
      },
      fontFamily: {
        primary: "Rubik",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontStyle: {
        italic: "italic", // Add "italic" style to the font family
      },
      colors: {
        //custom
        "custom-white": "#FFFAE8",
        "custom-blue": {
          400: "#50A7F8",
          500: "#2D8FEA",
        },
        "custom-yellow": "#FFF8B7",
        "window-gray": {
          200: "#C0C0C0",
          300: "#B8C0C1",
          400: "#808080",
        },

        //template
        "template-black": "#121212",
        "template-white": "#F3F1EA",
        "template-yellow": "#FFBA21",
        "template-green": "#56BC78",
        "template-orange": "#FF5722",
        "template-red": "#DF1D00",
      },
      screens: {
        "2xs": "360px",
        xs: "420px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
