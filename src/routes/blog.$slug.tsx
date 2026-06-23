import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { posts } from "@/lib/content";
import tasbih from "@/assets/tasbih.jpg";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    return {
      meta: [
        { title: post ? `${post.title} — Ustaz Muhammad Ferej` : "Article" },
        { name: "description", content: post?.excerpt ?? "" },
        { property: "og:title", content: post?.title ?? "" },
        { property: "og:description", content: post?.excerpt ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPost,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="container-prose py-32 text-center">
        <p className="font-display text-3xl">Article not found</p>
        <Link to="/blog" className="btn-outline-gold mt-6 inline-flex">
          Back to writings
        </Link>
      </div>
    </SiteLayout>
  ),
});

function BlogPost() {
  const { post } = Route.useLoaderData();
  const idx = posts.findIndex((p) => p.slug === post.slug);
  const next = posts[(idx + 1) % posts.length];

  return (
    <SiteLayout>
      <article>
        <header className="relative overflow-hidden border-b border-border">
          <img
            src={tasbih}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          <div className="container-prose relative py-24 max-w-3xl">
            <Link to="/blog" className="text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-soft">
              ← All writings
            </Link>
            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-gold">{post.category}</p>
            <h1 className="font-display text-4xl md:text-6xl mt-4 leading-[1.05]">{post.title}</h1>
            <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground">
              <span>By Ustaz Muhammad Ferej</span>
              <span>&middot;</span>
              <span>{post.date}</span>
              <span>&middot;</span>
              <span className="text-gold/80">{post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="container-prose py-16 max-w-3xl">
          <div className="space-y-6 text-lg leading-[1.85] text-foreground/90">
            {post.body.map((para: string, i: number) => (
              <p key={i} className={i === 0 ? "first-letter:font-display first-letter:text-6xl first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none" : ""}>
                {para}
              </p>
            ))}
          </div>

          <div className="ornament-divider my-16" />

          <div className="rounded-xl border border-border bg-card/40 p-8">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Continue reading</p>
            <Link
              to="/blog/$slug"
              params={{ slug: next.slug }}
              className="group block mt-3"
            >
              <h3 className="font-display text-2xl group-hover:text-gold transition">
                {next.title}
              </h3>
              <p className="mt-2 text-muted-foreground text-sm">{next.excerpt}</p>
            </Link>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
