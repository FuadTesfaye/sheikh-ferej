import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { posts } from "@/lib/content";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Writings — Ustaz Muhammad Ferej" },
      {
        name: "description",
        content: "Reflections and essays on aqeedah, tarbiyah, history and the inner life.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">The writings</p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl">
          Reflections from the journey of faith.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          Short essays and longer pieces — written slowly, meant to be read slowly.
        </p>
      </section>

      <section className="container-prose py-12">
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group grid md:grid-cols-[80px_140px_1fr_auto] gap-6 items-start py-8 px-2 hover:bg-card/40 transition"
              >
                <span className="font-display text-3xl text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-gold pt-2">
                  {p.category}
                </span>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl group-hover:text-gold transition">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
                    {p.excerpt}
                  </p>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.2em] text-muted-foreground pt-2 whitespace-nowrap">
                  <p>{p.date}</p>
                  <p className="mt-1 text-gold/70">{p.readTime}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
