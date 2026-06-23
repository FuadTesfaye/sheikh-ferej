import { Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

type Language = "en" | "am" | "ar";

interface Translation {
  home: string;
  about: string;
  lectures: string;
  writings: string;
  learning: string;
  contact: string;
  beginLearning: string;
  knowledgeIsLight: string;
  scholarTitle: string;
  scholarSubtitle: string;
  revivingTradition: string;
  explore: string;
  follow: string;
}

const translations: Record<Language, Translation> = {
  en: {
    home: "Home",
    about: "About",
    lectures: "Lectures",
    writings: "Writings",
    learning: "Learning",
    contact: "Contact",
    beginLearning: "Begin learning",
    knowledgeIsLight: "Knowledge is light.",
    scholarTitle: "Sheikh Mohammed Ferej",
    scholarSubtitle: "Islamic Scholar · Ethiopia",
    revivingTradition:
      "Reviving the classical tradition of Islamic learning for a new generation of Ethiopian Muslims and the worldwide ummah.",
    explore: "Explore",
    follow: "Follow",
  },
  am: {
    home: "መነሻ",
    about: "ስለ ሼኩ",
    lectures: "ትምህርቶች",
    writings: "ጽሁፎች",
    learning: "ትምህርት",
    contact: "እውቂያ",
    beginLearning: "ትምህርት ጀምር",
    knowledgeIsLight: "እውቀት ብርሃን ነው።",
    scholarTitle: "ሼክ መሐመድ ፈረጅ",
    scholarSubtitle: "ኢስላማዊ ምሁር · ኢትዮጵያ",
    revivingTradition:
      "ለአዲሱ የኢትዮጵያ ሙስሊሞች ትውልድ እና ለአለም አቀፉ ኡማ የቀደምት ኢስላማዊ የትምህርት ባህልን ማደስ።",
    explore: "አስስ",
    follow: "ተከተሉ",
  },
  ar: {
    home: "الرئيسية",
    about: "عن الشيخ",
    lectures: "المحاضرات",
    writings: "المقالات",
    learning: "التعلم",
    contact: "اتصل بنا",
    beginLearning: "ابدأ التعلم",
    knowledgeIsLight: "العلم نور.",
    scholarTitle: "الشيخ محمد فرج",
    scholarSubtitle: "عالم إسلامي · إثيوبيا",
    revivingTradition:
      "إحياء التراث التعليمي الإسلامي الكلاسيكي لجيل جديد من مسلمي إثيوبيا والأمة الإسلامية جمعاء.",
    explore: "استكشف",
    follow: "تابعنا",
  },
};

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "am", label: "አማርኛ", flag: "🇪🇹" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("app-language") as Language;
    if (savedLang && (["en", "am", "ar"] as const).includes(savedLang)) {
      setLang(savedLang);
      document.documentElement.lang = savedLang;
    }
  }, []);

  const handleLangChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("app-language", newLang);
    document.documentElement.lang = newLang;
  };

  const t = translations[lang];

  return (
    <div
      className={`min-h-screen flex flex-col bg-background text-foreground ${lang === "ar" ? "rtl" : "ltr"}`}
    >
      <Header lang={lang} onLangChange={handleLangChange} t={t} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer t={t} />
    </div>
  );
}

interface HeaderProps {
  lang: Language;
  onLangChange: (lang: Language) => void;
  t: Translation;
}

function Header({ lang, onLangChange, t }: HeaderProps) {
  const nav = [
    { to: "/", label: t.home, exact: true },
    { to: "/about", label: t.about, exact: false },
    { to: "/lectures", label: t.lectures, exact: false },
    { to: "/blog", label: t.writings, exact: false },
    { to: "/learn", label: t.learning, exact: false },
    { to: "/contact", label: t.contact, exact: false },
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg transition"
          aria-label={t.home}
        >
          <span
            className="grid place-items-center h-10 w-10 rounded-full border border-gold/60 text-gold font-display text-xl group-hover:bg-gold/10 transition"
            aria-hidden="true"
          >
            ﷽
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl tracking-wide">{t.scholarTitle}</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.scholarSubtitle}
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="px-4 py-2 text-sm tracking-wide text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
              activeProps={{ className: "px-4 py-2 text-sm tracking-wide text-gold" }}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger
              className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
              aria-label="Select language"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span>{languages.find((l) => l.code === lang)?.label}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border" align="end">
              {languages.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => onLangChange(l.code)}
                  className={`flex items-center gap-3 cursor-pointer hover:bg-gold/10 focus:bg-gold/10 outline-none transition-colors ${
                    lang === l.code ? "text-gold" : ""
                  }`}
                >
                  <span aria-hidden="true">{l.flag}</span>
                  <span>{l.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            to="/learn"
            className="btn-gold ml-3 text-sm py-2.5 px-5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gold outline-none"
          >
            {t.beginLearning}
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer({ t }: { t: Translation }) {
  const nav = [
    { to: "/", label: t.home },
    { to: "/about", label: t.about },
    { to: "/lectures", label: t.lectures },
    { to: "/blog", label: t.writings },
    { to: "/learn", label: t.learning },
    { to: "/contact", label: t.contact },
  ] as const;

  return (
    <footer className="mt-24 border-t border-border/60 bg-card/30">
      <div className="container-prose py-16 grid md:grid-cols-3 gap-12 text-start">
        <div className="flex flex-col gap-4">
          <p className="font-display text-2xl text-gold">{t.scholarTitle}</p>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {t.revivingTradition}
          </p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-6 font-semibold">
            {t.explore}
          </h2>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className="text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-6 font-semibold">
            {t.follow}
          </h2>
          <ul className="space-y-3 text-sm">
            {[
              {
                label: "Facebook",
                href: "https://web.facebook.com/profile.php?id=100064605885257",
              },
              { label: "TikTok", href: "https://www.tiktok.com/@ustazmuhammadferej0" },
              { label: "Telegram", href: "https://t.me/ustazmuhammadferej" },
            ].map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-8 text-center text-xs text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} {t.scholarTitle}. {t.knowledgeIsLight}
        </p>
      </div>
    </footer>
  );
}
