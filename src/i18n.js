import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./translations/en.json";
import fa from "./translations/fa.json";
import ar from "./translations/ar.json";
import ru from "./translations/ru.json";

const defaultLanguage = localStorage.getItem("language") || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fa: { translation: fa },
    ar: { translation: ar },
    ru: { translation: ru },
  },
  lng: defaultLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
  debug: true,
});

export default i18n;