import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import am from "./locales/am.json";
import ar from "./locales/ar.json";
import om from "./locales/om.json";

export const SUPPORTED_LANGUAGES = ["en", "am", "ar", "om"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

const STORAGE_KEY = "app-language";

function getSavedLanguage(): Language {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
    return saved as Language;
  }
  return "en";
}

function applyDocumentLanguage(lang: Language) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

const initialLanguage = getSavedLanguage();
applyDocumentLanguage(initialLanguage);

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    am: { translation: am },
    ar: { translation: ar },
    om: { translation: om },
  },
  lng: initialLanguage,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lang) => {
  localStorage.setItem(STORAGE_KEY, lang);
  applyDocumentLanguage(lang as Language);
});

export default i18n;
