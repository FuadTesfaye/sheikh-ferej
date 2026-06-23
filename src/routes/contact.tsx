import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ustaz Muhammad Ferej" },
      { name: "description", content: "Get in touch with Ustaz Muhammad Ferej." },
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
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Get in touch</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl">
          A word reaches further than we know.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Whether you have a question, a request for a lecture, or simply a salaam to send — you are
          welcome here.
        </p>
      </section>

      <section className="container-prose grid lg:grid-cols-2 gap-10 py-12">
        <form
          className="p-8 rounded-2xl border border-border bg-card/40 space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            alert("JazakAllahu khayran — your message has been received.");
          }}
        >
          <Field label="Your name">
            <input
              required
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition"
              placeholder="Abdullah"
            />
          </Field>
          <Field label="Email">
            <input
              type="email"
              required
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition"
              placeholder="you@example.com"
            />
          </Field>
          <Field label="Subject">
            <input
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition"
              placeholder="A question on tafsir…"
            />
          </Field>
          <Field label="Your message">
            <textarea
              required
              rows={6}
              className="w-full bg-background/60 border border-border rounded-md px-4 py-3 focus:outline-none focus:border-gold transition resize-none"
              placeholder="Assalamu alaykum…"
            />
          </Field>
          <button type="submit" className="btn-gold w-full">
            Send message
          </button>
        </form>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Find the ustaz online</p>
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
            <p className="mt-2 text-sm italic text-muted-foreground">
              "And speak to people good words." — Al-Baqarah 2:83
            </p>
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
