import i18n from "i18next";
import { reactI18nextModule } from "react-i18next";

import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../src/locales/en/translation.json";
import translationAR from "../src/locales/ar/translation.json";
import translationTR from "../src/locales/tr/translation.json";



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

function setDirection(direction) {
    document.body.setAttribute("dir", direction);
    document.documentElement.setAttribute("lang", i18n.language);

    document.getElementById("root").style.textAlign =
        direction === "rtl" ? "right" : "left";
}

i18n.on("languageChanged", (lng) => {
    localStorage.setItem("lng", lng);
    if (lng === "ar") {
        setDirection("rtl");
    } else {
        setDirection("ltr");
    }
});
// passes i18n down to react-i18next
// detect user language
// learn more: https://github.com/i18next/i18next-browser-languageDetector
i18n.use(LanguageDetector)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
        whitelist: ["en", "ar", "tr"],

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });

export default i18n;
