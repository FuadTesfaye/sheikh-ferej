import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
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
      <section className="container-prose pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{t("contact.getInTouch")}</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl">{t("contact.hero")}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {t("contact.subhero")}
        </p>
      </section>

      <section className="container-prose grid lg:grid-cols-2 gap-10 py-12">
        <form
          className="p-8 rounded-2xl border border-border bg-card/40 space-y-5"
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

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">{t("contact.findOnline")}</p>
          <div className="grid gap-3 p-5 rounded-xl border border-border bg-card/40">
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
              className="group flex items-center gap-5 p-6 rounded-xl border border-border bg-card/40 hover:border-gold/60 transition"
            >
              <span className="grid place-items-center h-14 w-14 rounded-full border border-gold/40 text-gold text-2xl font-display group-hover:bg-gold/10 transition">
                {c.sym}
              </span>
              <div className="flex-1">
                <p className="font-display text-xl">{c.name}</p>
                <p className="text-sm text-muted-foreground">{c.handle}</p>
              </div>
              <span className="text-gold opacity-0 group-hover:opacity-100 transition">→</span>
            </a>
          ))}

          <div className="p-6 rounded-xl border border-gold/30 bg-gradient-to-br from-card to-card/40 mt-6">
            <p className="font-arabic text-2xl text-gold leading-loose">
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
