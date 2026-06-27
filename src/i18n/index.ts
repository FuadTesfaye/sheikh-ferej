import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import am from "./locales/am.json";
import ar from "./locales/ar.json";
import om from "./locales/om.json";

export const SUPPORTED_LANGUAGES = ["en", "am", "ar", "om"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

export const STORAGE_KEY = "app-language";

export const i18nResources = {
  en: { translation: en },
  am: { translation: am },
  ar: { translation: ar },
  om: { translation: om },
} as const;

function applyDocumentLanguage(lang: Language) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
}

export function getSavedLanguage(): Language {
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && SUPPORTED_LANGUAGES.includes(saved as Language)) {
      return saved as Language;
    }
  } catch {
    // localStorage may be unavailable in private browsing / SSR edge cases
  }
  return "en";
}

let initialized = false;

/** Idempotent i18n setup — safe on server and client. Always starts at `en` for SSR/hydration match. */
export function initI18n() {
  if (initialized || i18n.isInitialized) {
    return i18n;
  }

  initialized = true;

  i18n.use(initReactI18next).init({
    resources: i18nResources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initAsync: false,
  });

  i18n.on("languageChanged", (lang) => {
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        // ignore storage errors
      }
    }
    applyDocumentLanguage(lang as Language);
  });

  return i18n;
}

/** Call once on the client after hydration to restore the user's saved language. */
export function restoreClientLanguage() {
  if (typeof window === "undefined") return;

  const saved = getSavedLanguage();
  applyDocumentLanguage(saved);

  if (saved !== i18n.language) {
    void i18n.changeLanguage(saved);
  }
}

// Eager init so SSR and first client render have translations loaded.
initI18n();

export default i18n;
