import { type ReactNode, useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n, { initI18n, restoreClientLanguage } from "@/i18n";

initI18n();

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    restoreClientLanguage();
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
