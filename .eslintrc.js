module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    plugins: ["simple-import-sort", "unused-imports"],
    extends: ["eslint:recommended", "prettier"],
    rules: {
        "no-unused-vars": "off",
        "no-console": "warn",

        "react/jsx-curly-spacing": [2, "always"],
        "react/display-name": "off",

        //#region  //*=========== Unused Import ===========
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                vars: "all",
                varsIgnorePattern: "^_",
                args: "after-used",
                argsIgnorePattern: "^_",
            },
        ],
        //#endregion  //*======== Unused Import ===========

        //#region  //*=========== Import Sort ===========
        "simple-import-sort/exports": "warn",
        "simple-import-sort/imports": ["warn", {}],
        //#endregion  //*======== Import Sort ===========
    },
    globals: {
        React: true,
        JSX: true,
    },
};
