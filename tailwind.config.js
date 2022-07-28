/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
                quicksand: ["Quicksand", ...fontFamily.sans],
                SourceSansPro: ["Source Sans Pro", ...fontFamily.sans],
            },
            colors: {
                "blue-dark": "#1D3557",
                "blue-light": "#6C93AB",
                white: "#FFFFFF",
                red: "#F05454",
                gray: "#DDDDDD",
            },
            padding: {
                1.75: "0.45rem",
            },
            colors: {
                "blue-dark": "#1D3557",
                "blue-light": "#6C93AB",
                white: "#FFFFFF",
                red: "#F05454",
            },
            colors:{
                primary: '#1D3557',
                secondary: '#457B9D',
                redButton: '#F05454'
            }
        },
        colors: {
            'blue-dark': '#1D3557',
            'blue-light': '#6C93AB',
            'white': '#FFFFFF',
            'red': '#F05454',
            'gray': '#DDDDDD',
          },
    },
    plugins: [require("@tailwindcss/forms")],
};
