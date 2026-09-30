import { describe, expect, it } from "vitest";
import i18n, { SUPPORTED_LANGUAGES, initI18n, i18nResources } from "@/i18n";
import { getTextByLang, posts } from "@/lib/content";
import en from "@/i18n/locales/en.json";
import am from "@/i18n/locales/am.json";
import ar from "@/i18n/locales/ar.json";
import om from "@/i18n/locales/om.json";

function flattenKeys(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return flattenKeys(value as Record<string, unknown>, path);
    }
    return [path];
  });
}

describe("i18n", () => {
  it("initializes with all four languages", () => {
    initI18n();
    expect(i18n.isInitialized).toBe(true);
    for (const lang of SUPPORTED_LANGUAGES) {
      expect(i18nResources[lang].translation).toBeDefined();
    }
  });

  it("translates nav.home in every language", () => {
    for (const lang of SUPPORTED_LANGUAGES) {
      i18n.changeLanguage(lang);
      const value = i18n.t("nav.home");
      expect(value).not.toBe("nav.home");
      expect(value.length).toBeGreaterThan(0);
    }
  });

  it("has matching keys across all locale files", () => {
    const enKeys = flattenKeys(en).sort();
    const amKeys = flattenKeys(am).sort();
    const arKeys = flattenKeys(ar).sort();
    const omKeys = flattenKeys(om).sort();

    expect(amKeys).toEqual(enKeys);
    expect(arKeys).toEqual(enKeys);
    expect(omKeys).toEqual(enKeys);
  });

  it("returns content for every language including Oromo", () => {
    for (const lang of SUPPORTED_LANGUAGES) {
      const title = getTextByLang(posts[0].title, lang);
      expect(title).toBeTruthy();
      expect(title).not.toBe("");
    }
  });
});
