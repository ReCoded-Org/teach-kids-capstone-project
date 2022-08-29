/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js", "./src/**/*.html"],
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
                "light-gray": "#5E5E5E",
                "blue-btn": "#457B9D",
                black: "#0E0E0E",
                primary: '#1D3557',
                secondary: '#457B9D',
                redButton: '#F05454',
            },
            padding: {
                1.75: "0.45rem",
            },
            zIndex: {
                '100': '100',
            }, height: {
                '128': '32rem',
            }, width: {
                '128': '32rem',
            }
        },
    },

    plugins: [require("@tailwindcss/forms",), require('flowbite/plugin')],

};
