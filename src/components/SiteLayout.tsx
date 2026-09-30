import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Menu, LogOut, Sun, Moon } from "lucide-react";
import { useLanguage, type Language } from "@/hooks/use-language";
import { useAuth } from "@/hooks/use-auth";
import { useTheme } from "@/hooks/use-theme";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetHeader } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "am", label: "አማርኛ", flag: "🇪🇹" },
  { code: "om", label: "Afaan Oromoo", flag: "🇪🇹" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
];

export function SiteLayout({ children }: { children: ReactNode }) {
  const { t, language, setLanguage } = useLanguage();
  const { isAuthenticated, logout } = useAuth();

  const nav = [
    { to: "/", label: t("nav.home"), exact: true },
    { to: "/about", label: t("nav.about"), exact: false },
    { to: "/lectures", label: t("nav.lectures"), exact: false },
    { to: "/blog", label: t("nav.writings"), exact: false },
    { to: "/learn", label: t("nav.learning"), exact: false },
    { to: "/contact", label: t("nav.contact"), exact: false },
  ] as const;

  const footerNav = [...nav, { to: "/admin", label: t("nav.admin"), exact: false }] as const;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header
        nav={nav}
        t={t}
        language={language}
        setLanguage={setLanguage}
        isAuthenticated={isAuthenticated}
        logout={logout}
      />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer t={t} nav={footerNav} />
    </div>
  );
}

function Header({
  nav,
  t,
  language,
  setLanguage,
  isAuthenticated,
  logout,
}: {
  nav: readonly { to: string; label: string; exact: boolean }[];
  t: (key: string) => string;
  language: Language;
  setLanguage: (lang: Language) => void;
  isAuthenticated: boolean;
  logout: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60 supports-[backdrop-filter]:bg-background/70">
      <div className="container-prose flex min-h-16 sm:min-h-20 items-center justify-between gap-2 sm:gap-4 py-2">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 group outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg transition min-w-0"
          aria-label={t("nav.home")}
        >
          <span
            className="grid place-items-center h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-gold/60 text-gold font-display text-lg sm:text-xl group-hover:bg-gold/10 transition shrink-0"
            aria-hidden="true"
          >
            ﷽
          </span>
          <span className="flex flex-col leading-tight min-w-0">
            <span className="font-display text-base sm:text-xl tracking-wide truncate">
              {t("common.scholarTitle")}
            </span>
            <span className="hidden sm:block text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground truncate max-w-[10rem] sm:max-w-none">
              {t("common.scholarSubtitle")}
            </span>
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-0.5" aria-label={t("a11y.mainNavigation")}>
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="px-3 py-2 text-sm tracking-wide text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
              activeProps={{ className: "px-3 py-2 text-sm tracking-wide text-gold" }}
            >
              {item.label}
            </Link>
          ))}

          {isAuthenticated && (
            <Link
              to="/admin"
              className="px-3 py-2 text-sm tracking-wide text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
              activeProps={{ className: "px-3 py-2 text-sm tracking-wide text-gold" }}
            >
              {t("nav.admin")}
            </Link>
          )}

          <LanguageSelector language={language} setLanguage={setLanguage} t={t} />

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-gold"
            aria-label={t("a11y.toggleTheme")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>

          {isAuthenticated ? (
            <Button
              variant="ghost"
              size="sm"
              onClick={logout}
              className="ml-2 text-muted-foreground hover:text-gold"
            >
              <LogOut className="h-4 w-4 mr-2" />
              {t("nav.logout")}
            </Button>
          ) : (
            <Link to="/login" className="btn-gold ml-2 text-sm py-2 px-4">
              {t("nav.login")}
            </Link>
          )}

          {!isAuthenticated && (
            <Link
              to="/learn"
              className="ml-2 text-sm py-2 px-4 border border-gold text-gold hover:bg-gold/10 rounded-lg transition"
            >
              {t("nav.beginLearning")}
            </Link>
          )}
        </nav>

        <div className="flex xl:hidden items-center gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-gold"
            aria-label={t("a11y.toggleTheme")}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <LanguageSelector language={language} setLanguage={setLanguage} t={t} />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gold" aria-label={t("a11y.openMenu")}>
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background border-border w-[min(100vw-2rem,400px)]"
            >
              <SheetHeader>
                <SheetTitle className="text-start font-display text-2xl text-gold">
                  {t("common.scholarTitle")}
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-12" aria-label={t("a11y.mobileNavigation")}>
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
                {isAuthenticated && (
                  <Link
                    to="/admin"
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-display tracking-wide text-muted-foreground hover:text-gold transition py-2 border-b border-border/40"
                    activeProps={{
                      className:
                        "text-lg font-display tracking-wide text-gold py-2 border-b border-border/40",
                    }}
                  >
                    {t("nav.admin")}
                  </Link>
                )}
                {isAuthenticated ? (
                  <Button
                    variant="ghost"
                    className="mt-4 justify-start text-muted-foreground hover:text-gold"
                    onClick={() => {
                      logout();
                      setIsOpen(false);
                    }}
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    {t("nav.logout")}
                  </Button>
                ) : (
                  <>
                    <Link
                      to="/login"
                      onClick={() => setIsOpen(false)}
                      className="btn-gold mt-6 w-full text-center"
                    >
                      {t("nav.login")}
                    </Link>
                    <Link
                      to="/learn"
                      onClick={() => setIsOpen(false)}
                      className="mt-2 w-full text-center border border-gold text-gold hover:bg-gold/10 rounded-lg transition py-2.5"
                    >
                      {t("nav.beginLearning")}
                    </Link>
                  </>
                )}
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
  t,
}: {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className="flex items-center gap-1.5 sm:gap-2 px-2 sm:px-4 py-2 text-sm text-muted-foreground hover:text-gold transition outline-none focus-visible:text-gold"
        aria-label={t("a11y.selectLanguage")}
      >
        <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
        <span className="hidden sm:inline">{languages.find((l) => l.code === language)?.label}</span>
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

function Footer({
  t,
  nav,
}: {
  t: (key: string) => string;
  nav: readonly { to: string; label: string; exact: boolean }[];
}) {
  return (
    <footer className="mt-12 sm:mt-16 md:mt-24 border-t border-border/60 bg-card/30">
      <div className="container-prose py-10 sm:py-12 md:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 text-start">
        <div className="flex flex-col gap-4">
          <p className="font-display text-2xl text-gold">{t("common.scholarTitle")}</p>
          <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
            {t("common.revivingTradition")}
          </p>
        </div>
        <div>
          <h2 className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-6 font-semibold">
            {t("nav.explore")}
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
            {t("nav.follow")}
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
      <div className="border-t border-border/60 py-6 sm:py-8 text-center text-xs text-muted-foreground px-4">
        <p>
          &copy; {new Date().getFullYear()} {t("common.scholarTitle")}. {t("common.knowledgeIsLight")}
        </p>
      </div>
    </footer>
  );
}
