module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff6363",
        secondary: {
          100: "#e2e2d5",
          200: "#888883"
        }
      },
      fontFamily: {
        main: ["Nunito"]
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }]
      },
      boxShadow: {
        border: "inset 0 0 0 2px black"
      }
    }
  },
  plugins: []
};
