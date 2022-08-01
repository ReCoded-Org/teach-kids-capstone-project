module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        "react-app",
        "react-app/jest",
        "plugin:react/recommended",
        "prettier",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "no-unused-vars": "off",
        "no-console": "warn",
        "react/display-name": "off",
        "react/react-in-jsx-scope": "off",
        "react/prop-types": 0,
    },
};
