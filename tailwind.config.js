/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
            },
            colors: {
                "blue-dark": "#1D3557",
                "blue-light": "#6C93AB",
                white: "#FFFFFF",
                red: "#F05454",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
