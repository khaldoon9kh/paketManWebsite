import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import transitionEn from "./en.json";
import transitionAr from "./ar.json";
import transitionTr from "./tr.json";

const resources = {
  en: {
    translation: transitionEn,
  },
  ar: {
    translation: transitionAr,
  },
  tr: {
    translation: transitionTr,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: `${localStorage.getItem("language")}`,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18next;
