import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/lectures", label: "Lectures" },
  { to: "/blog", label: "Writings" },
  { to: "/learn", label: "Learning" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="container-prose flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid place-items-center h-10 w-10 rounded-full border border-gold/60 text-gold font-display text-xl group-hover:bg-gold/10 transition">
            ﷽
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl tracking-wide">Ustaz Muhammad Ferej</span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Islamic Scholar &middot; Ethiopia
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
          <Link to="/learn" className="btn-gold ml-3 text-sm py-2.5 px-5">
            Begin learning
          </Link>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/30">
      <div className="container-prose py-16 grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl text-gold">Ustaz Muhammad Ferej</p>
          <p className="mt-3 text-sm text-muted-foreground max-w-xs">
            Reviving the classical tradition of Islamic learning for a new generation of Ethiopian
            Muslims and the worldwide ummah.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-gold/80">Explore</p>
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
          <p className="text-xs uppercase tracking-[0.25em] text-gold/80">Follow</p>
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
        &copy; {new Date().getFullYear()} Ustaz Muhammad Ferej. Knowledge is light.
      </div>
    </footer>
  );
}
