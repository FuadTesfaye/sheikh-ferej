import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu } from "lucide-react";
import { useLanguage, type Language, type Translation } from "@/hooks/use-language";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "am", label: "አማርኛ", flag: "🇪🇹" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header t={t} language={language} setLanguage={setLanguage} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer t={t} />
    </div>
  );
}

function Header({
  t,
  language,
  setLanguage,
}: {
  t: Translation;
  language: Language;
  setLanguage: (lang: Language) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Desktop Navigation */}
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

          <LanguageSelector language={language} setLanguage={setLanguage} />

          <Link to="/learn" className="btn-gold ml-3 text-sm py-2.5 px-5">
            {t.beginLearning}
          </Link>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageSelector language={language} setLanguage={setLanguage} />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gold" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-border w-[300px] sm:w-[400px]"
            >
              <SheetHeader>
                <SheetTitle className="text-start font-display text-2xl text-gold">
                  {t.scholarTitle}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-12" aria-label="Mobile navigation">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    activeOptions={{ exact: item.exact }}
                    className="text-lg font-display tracking-wide text-muted-foreground hover:text-gold transition py-2 border-b border-border/40"
                    activeProps={{
                      className:
                        "text-lg font-display tracking-wide text-gold py-2 border-b border-border/40",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/learn"
                  onClick={() => setIsOpen(false)}
                  className="btn-gold mt-6 w-full text-center"
                >
                  {t.beginLearning}
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function LanguageSelector({
  language,
  setLanguage,
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        <span>{languages.find((l) => l.code === language)?.label}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background border-border" align="end">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => setLanguage(l.code)}
            className={`flex items-center gap-3 cursor-pointer hover:bg-gold/10 focus:bg-gold/10 outline-none transition-colors ${
              language === l.code ? "text-gold" : ""
            }`}
          >
            <span aria-hidden="true">{l.flag}</span>
            <span>{l.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
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
    { to: "/admin", label: "Admin" },
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
