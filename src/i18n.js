import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../public/locales/en/translation.json";
import translationAR from "../public/locales/ar/translation.json";
import translationTR from "../public/locales/tr/translation.json";

// the translations
const resources = {
    en: {
        translation: translationEN,
    },
    ar: {
        translation: translationAR,
    },
    tr: {
        translation: translationTR,
    },
};

i18n.use(reactI18nextModule) // passes i18n down to react-i18next
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        whitelist: ["en", "ar", "tr"],
        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
