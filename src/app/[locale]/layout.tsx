import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { localeDirections, type Locale } from "@/i18n/config";
import { getProfile } from "@/lib/api/profile";
import { buildNavigation, buildMoreItems } from "@/lib/sections";
import { SiteHeader } from "@/components/shell/site-header";
import { SiteFooter } from "@/components/shell/site-footer";
import type { PublicProfile, SectionMap } from "@/lib/api/types";

const DEFAULT_SECTIONS: SectionMap = {
  lectures: true,
  articles: true,
  fatwas: true,
  courses: true,
  library: true,
  events: true,
  questions: true,
};

const FALLBACK_PROFILE: PublicProfile = {
  object: "profile",
  id: "",
  name: "Sheikh Muhammed Hamdu",
  headline: "Islamic Scholar & Teacher",
  biography: null,
  languages: ["ar", "am", "en"],
  locale: "en",
  direction: "ltr",
  photo: null,
  sections: DEFAULT_SECTIONS,
  socials: {},
  updated_at: new Date().toISOString(),
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  let profile: PublicProfile;
  try {
    profile = await getProfile(locale);
  } catch {
    profile = FALLBACK_PROFILE;
  }

  const messages = await getMessages();
  const dir = localeDirections[locale as Locale] ?? "ltr";
  const nav = buildNavigation(profile.sections);
  const moreItems = buildMoreItems(profile.sections);

  return (
    <NextIntlClientProvider messages={messages}>
      <div dir={dir} lang={locale} className="min-h-screen flex flex-col">
        <SiteHeader
          profile={profile}
          navigation={nav}
          moreItems={moreItems}
          locale={locale}
        />
        <main className="flex-1">{children}</main>
        <SiteFooter profile={profile} locale={locale} />
      </div>
    </NextIntlClientProvider>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
