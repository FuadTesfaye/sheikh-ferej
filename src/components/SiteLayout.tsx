import { Link } from "@tanstack/react-router";
import { useState, useEffect, type ReactNode } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

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
    about: "عን الشيخ",
    lectures: "المحاضرات",
    writings: "المقالات",
    learning: "التعلم",
    contact: "اتصل بنا",
    beginLearning: "ابدأ التعلم",
    knowledgeIsLight: "العلم نور.",
    scholarTitle: "الشيخ محمد فرج",
    scholarSubtitle: "عالم إسلامي · إትዮጵያ",
    revivingTradition:
      "إحياء التراث التعليمي الإسلامي الكلاسيكي لجيل جديد من مسلمي إትዮጵያ والأمة الإسلامية جمعاء.",
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
    if (savedLang && ["en", "am", "ar"].includes(savedLang)) {
      setLang(savedLang);
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
      <main className="flex-1">{children}</main>
      <Footer t={t} />
    </div>
  );
}

function Header({
  lang,
  onLangChange,
  t,
}: {
  lang: Language;
  onLangChange: (lang: Language) => void;
  t: Translation;
}) {
  const nav = [
    { to: "/", label: t.home },
    { to: "/about", label: t.about },
    { to: "/lectures", label: t.lectures },
    { to: "/blog", label: t.writings },
    { to: "/learn", label: t.learning },
    { to: "/contact", label: t.contact },
  ] as const;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid place-items-center h-10 w-10 rounded-full border border-gold/60 text-gold font-display text-xl group-hover:bg-gold/10 transition">
            ﷽
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl tracking-wide">{t.scholarTitle}</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {t.scholarSubtitle}
            </span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="px-4 py-2 text-sm tracking-wide text-muted-foreground hover:text-gold transition"
              activeProps={{ className: "px-4 py-2 text-sm tracking-wide text-gold" }}
            >
              {item.label}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-gold transition outline-none">
              <Globe className="h-4 w-4" />
              <span>{languages.find((l) => l.code === lang)?.label}</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border-border">
              {languages.map((l) => (
                <DropdownMenuItem
                  key={l.code}
                  onClick={() => onLangChange(l.code)}
                  className={`flex items-center gap-3 cursor-pointer hover:bg-gold/10 ${lang === l.code ? "text-gold" : ""}`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/learn" className="btn-gold ml-3 text-sm py-2.5 px-5">
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
        <div>
          <p className="font-display text-2xl text-gold">{t.scholarTitle}</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">{t.revivingTradition}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold/80">{t.explore}</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-muted-foreground hover:text-foreground transition">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold/80">{t.follow}</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href="https://web.facebook.com/profile.php?id=100064605885257"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@ustazmuhammadferej0"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                href="https://t.me/ustazmuhammadferej"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition"
              >
                Telegram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} {t.scholarTitle}. {t.knowledgeIsLight}
      </div>
    </footer>
  );
}
