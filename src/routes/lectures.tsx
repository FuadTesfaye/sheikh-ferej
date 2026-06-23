import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { lectures } from "@/lib/content";
import lectureImg from "@/assets/lecture.jpg";

export const Route = createFileRoute("/lectures")({
  head: () => ({
    meta: [
      { title: "Lectures — Ustaz Muhammad Ferej" },
      {
        name: "description",
        content: "Recorded lectures, Friday khutbas and short reminders by Ustaz Muhammad Ferej.",
      },
    ],
  }),
  component: Lectures,
});

const platformLabel: Record<string, string> = {
  Facebook: "Facebook",
  TikTok: "TikTok",
  Telegram: "Telegram",
};

const platformLink: Record<string, string> = {
  Facebook: "https://web.facebook.com/profile.php?id=100064605885257",
  TikTok: "https://www.tiktok.com/@ustazmuhammadferej0",
  Telegram: "https://t.me/ustazmuhammadferej",
};

function Lectures() {
  const [featured, ...rest] = lectures;
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Lectures &amp; reminders</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl">
          The spoken word, recorded for the seeker.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Friday khutbas, halaqas, and short reminders — drawn from over twenty years of teaching in
          the mosques of Ethiopia.
        </p>
      </section>

      {/* Featured */}
      <section className="container-prose py-8">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 rounded-2xl overflow-hidden border border-gold/30 bg-card/40">
          <div className="relative aspect-video lg:aspect-auto min-h-[320px]">
            <img
              src={lectureImg}
              alt={featured.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <button
              aria-label="Play lecture"
              className="absolute inset-0 grid place-items-center group"
            >
              <span className="grid place-items-center h-20 w-20 rounded-full bg-gold/90 text-primary-foreground text-3xl pl-1 shadow-2xl group-hover:scale-110 transition">
                ▶
              </span>
            </button>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em]">
              <span className="text-gold">Latest lecture</span>
              <span className="text-muted-foreground">&middot; {featured.topic}</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
              {featured.title}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{featured.description}</p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{featured.date}</span>
              <span>&middot;</span>
              <span className="text-gold/80">{featured.duration}</span>
            </div>
            <a
              href={platformLink[featured.platform]}
              target="_blank"
              rel="noreferrer"
              className="btn-outline-gold mt-8 text-sm py-2.5 px-5 self-start"
            >
              Watch on {platformLabel[featured.platform]} →
            </a>
          </div>
        </div>
      </section>

      {/* Archive */}
      <section className="container-prose py-16">
        <div className="ornament-divider text-xs uppercase tracking-[0.3em]">The archive</div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((l) => (
            <a
              key={l.id}
              href={platformLink[l.platform]}
              target="_blank"
              rel="noreferrer"
              className="group block p-6 rounded-xl border border-border bg-card/40 hover:border-gold/60 transition"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-gold/20 via-accent/15 to-background grid place-items-center relative overflow-hidden">
                <span className="font-arabic text-7xl text-gold/40 group-hover:text-gold/70 transition">
                  ﷲ
                </span>
                <span className="absolute bottom-3 right-3 grid place-items-center h-10 w-10 rounded-full bg-gold/90 text-primary-foreground pl-0.5 group-hover:scale-110 transition">
                  ▶
                </span>
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-background/80 border border-border">
                  {l.platform}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                <span className="text-gold">{l.topic}</span>
                <span className="text-muted-foreground">&middot; {l.duration}</span>
              </div>
              <h3 className="font-display text-xl mt-2 group-hover:text-gold transition">
                {l.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{l.description}</p>
              <p className="mt-4 text-xs text-muted-foreground">{l.date}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="container-prose py-12">
        <div className="p-8 md:p-10 rounded-2xl border border-gold/30 bg-card/40 text-center">
          <p className="font-arabic text-2xl text-gold leading-loose">
            بَلِّغُوا عَنِّي وَلَوْ آيَةً
          </p>
          <p className="mt-3 text-foreground/90 italic">
            "Convey from me, even a single verse." — Sahih al-Bukhari
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Share what benefits you. The reward of the one who guides is like the reward of the one
            who acts.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
