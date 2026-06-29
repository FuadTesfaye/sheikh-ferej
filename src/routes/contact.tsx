import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageLayout";
import { useLanguage } from "@/hooks/use-language";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Sheikh Muhammed Ferej Megeno" },
      { name: "description", content: "Get in touch with Sheikh Muhammed Ferej Megeno." },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    name: "Facebook",
    handle: "Ustaz Muhammad Ferej",
    href: "https://web.facebook.com/profile.php?id=100064605885257",
    sym: "f",
  },
  {
    name: "TikTok",
    handle: "@ustazmuhammadferej0",
    href: "https://www.tiktok.com/@ustazmuhammadferej0",
    sym: "♪",
  },
  {
    name: "Telegram",
    handle: "@ustazmuhammadferej",
    href: "https://t.me/ustazmuhammadferej",
    sym: "✈",
  },
];

function Contact() {
  const { t } = useLanguage();
  return (
    <SiteLayout>
      <PageHero label={t("contact.getInTouch")} title={t("contact.hero")} description={t("contact.subhero")} />

      <section className="container-prose grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 pb-12 sm:pb-16 md:pb-20">
        <form
          className="p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-card/40 space-y-4 sm:space-y-5 order-2 lg:order-1"
          onSubmit={(e) => {
            e.preventDefault();
            alert(t("contact.messageReceived"));
          }}
        >
          <Field label={t("contact.yourName")}>
            <input
              required
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition"
              placeholder={t("contact.namePlaceholder")}
            />
          </Field>
          <Field label={t("auth.email")}>
            <input
              type="email"
              required
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition"
              placeholder="you@example.com"
            />
          </Field>
          <Field label={t("contact.subjectLabel")}>
            <input
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition"
              placeholder={t("contact.subjectPlaceholder")}
            />
          </Field>
          <Field label={t("contact.message")}>
            <textarea
              required
              rows={6}
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition resize-none"
              placeholder={t("contact.messagePlaceholder")}
            />
          </Field>
          <button type="submit" className="btn-gold w-full">
            {t("contact.send")}
          </button>
        </form>

        <div className="space-y-3 sm:space-y-4 order-1 lg:order-2">
          <p className="section-label">{t("contact.findOnline")}</p>
          <div className="grid gap-3 p-4 sm:p-5 rounded-xl border border-border bg-card/40">
            <a href="tel:00251911855488" className="flex items-center gap-3 text-sm hover:text-gold transition">
              <span className="text-gold">📞</span>
              <span>00251911855488</span>
            </a>
            <a href="mailto:abuhafsah77@gmail.com" className="flex items-center gap-3 text-sm hover:text-gold transition">
              <span className="text-gold">✉</span>
              <span>abuhafsah77@gmail.com</span>
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="text-gold">◎</span>
              <span>{t("contact.location")}</span>
            </div>
          </div>

          {channels.map((c) => (
            <a
              key={c.name}
              href={c.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 sm:gap-5 p-4 sm:p-6 rounded-xl border border-border bg-card/40 hover:border-gold/60 transition"
            >
              <span className="grid place-items-center h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-gold/40 text-gold text-xl sm:text-2xl font-display group-hover:bg-gold/10 transition shrink-0">
                {c.sym}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-display text-lg sm:text-xl">{c.name}</p>
                <p className="text-sm text-muted-foreground truncate">{c.handle}</p>
              </div>
              <span className="text-gold opacity-0 group-hover:opacity-100 transition hidden sm:inline">→</span>
            </a>
          ))}

          <div className="p-5 sm:p-6 rounded-xl border border-gold/30 bg-gradient-to-br from-card to-card/40 mt-4 sm:mt-6">
            <p className="font-arabic text-xl sm:text-2xl text-gold leading-loose" lang="ar">
              وَقُولُوا لِلنَّاسِ حُسْنًا
            </p>
            <p className="mt-2 text-sm italic text-muted-foreground">{t("contact.speakGoodWords")}</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
