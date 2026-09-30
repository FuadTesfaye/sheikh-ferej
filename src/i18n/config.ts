export const locales = ["en", "ar", "am", "om"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  ar: "العربية",
  am: "አማርኛ",
  om: "Afaan Oromoo",
};

export const localeDirections: Record<Locale, "ltr" | "rtl"> = {
  en: "ltr",
  ar: "rtl",
  am: "ltr",
  om: "ltr",
};
