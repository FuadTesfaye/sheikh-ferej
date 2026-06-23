import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { courses } from "@/lib/content";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Learning — Structured Islamic Courses" },
      {
        name: "description",
        content:
          "Structured courses in aqeedah, tafsir, fiqh, seerah, Arabic and tazkiyah by Ustaz Muhammad Ferej.",
      },
    ],
  }),
  component: LearnIndex,
});

const levelTint: Record<string, string> = {
  Beginner: "text-emerald-300/90 border-emerald-500/30 bg-emerald-500/5",
  Intermediate: "text-amber-300/90 border-amber-500/30 bg-amber-500/5",
  Advanced: "text-rose-300/90 border-rose-500/30 bg-rose-500/5",
};

function LearnIndex() {
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-10">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">The learning</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl">
          A school of seekers. A path of knowledge.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Structured courses in the classical Islamic sciences, taught with clarity for the modern
          seeker. Begin where you are.
        </p>
      </section>

      <section className="container-prose py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((c) => (
            <Link
              key={c.id}
              to="/learn/$courseId"
              params={{ courseId: c.id }}
              className="group relative p-8 rounded-2xl border border-border bg-gradient-to-br from-card to-card/40 hover:border-gold/60 hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] transition"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em]">
                <span
                  className={`px-2.5 py-1 rounded-full border ${levelTint[c.level]}`}
                >
                  {c.level}
                </span>
                <span className="text-muted-foreground">
                  {c.lessons} lessons &middot; {c.duration}
                </span>
              </div>
              <h2 className="font-display text-3xl mt-6 group-hover:text-gold transition">
                {c.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{c.subtitle}</p>

              <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                {c.topics.slice(0, 4).map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-gold">◆</span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-gold text-sm uppercase tracking-[0.2em]">
                  View course →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
