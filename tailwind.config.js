/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                primary: ["Inter", ...fontFamily.sans],
            },
            colors:{
                primary: '#1D3557',
                secondary: '#457B9D',
                redButton: '#F05454'
            }
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
