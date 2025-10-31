import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationAR from "./locales/ar/translation-ar.json";
import translationEN from "./locales/en/translation-en.json";

const resources = {
  ar: { translation: translationAR },
  en: { translation: translationEN },
};

const i18nextLng = localStorage.getItem("i18nextLng");

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    debug: false,
    lng: i18nextLng || "en",
    fallbackLng: ["en", "ar"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: true,
    },
  });

function addLangAndDir(lang) {
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
}

i18n.on("languageChanged", (lang) => {
  addLangAndDir(lang);
});

addLangAndDir(i18nextLng);

export default i18n;
