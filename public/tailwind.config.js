/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        gainsboro: "#dfe3e8",
        "dark-grey-400": "#212b36",
        brown: "#8e3131",
        gray: {
          "100": "#2f2b2b",
          "200": "rgba(255, 255, 255, 0.1)",
        },
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "4xs-5": "8.5px",
      },
    },
    fontSize: {
      "13xl": "32px",
      "41xl": "60px",
      "21xl": "40px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
