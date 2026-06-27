import { useTranslation } from "react-i18next";
import type { Language } from "@/i18n";

export type { Language };

export function useLanguage() {
  const { t, i18n } = useTranslation();
  return {
    language: i18n.language as Language,
    setLanguage: (lang: Language) => void i18n.changeLanguage(lang),
    t,
  };
}
