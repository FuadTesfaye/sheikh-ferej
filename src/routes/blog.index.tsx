import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import { dataService } from "@/lib/data-service";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Writings — Sheikh Mohammed Ferej" },
      {
        name: "description",
        content: "Reflections and essays on aqeedah, tarbiyah, history and the inner life.",
      },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState(() => dataService.getPosts());

  useEffect(() => {
    // In a real app, we might use a state management library or React Query
    // for now we just sync with local storage if it changes in this window
    const handleStorage = () => setPosts(dataService.getPosts());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {language === "en" ? "The writings" : language === "am" ? "ጽሁፎች" : "المقالات"}
        </p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl">
          {language === "en"
            ? "Reflections from the journey of faith."
            : language === "am"
              ? "ከእምነት ጉዞ ውስጥ ስሔቶችና ስምኦች."
              : "تأملات من رحلة الإيمان."}
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {language === "en"
            ? "Short essays and longer pieces — written slowly, meant to be read slowly."
            : language === "am"
              ? "አጭር ጽሑፎች እና ረዘም ያሉ ነገሮች — በቀልጃ የተጻፉ፣ በቀልጃ ለማንበታት የታደሉ."
              : "مقالات قصيرة وقطع أطول — مكتوبة ببطء، مخصصة للقراءة ببطء."}
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
                  {getTextByLang(p.category, language)}
                </span>
                <div>
                  <h2 className="font-display text-2xl md:text-3xl group-hover:text-gold transition">
                    {getTextByLang(p.title, language)}
                  </h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed max-w-2xl">
                    {getTextByLang(p.excerpt, language)}
                  </p>
                </div>
                <div className="text-right text-xs uppercase tracking-[0.2em] text-muted-foreground pt-2 whitespace-nowrap">
                  <p>{p.date}</p>
                  <p className="mt-1 text-gold/70">{getTextByLang(p.readTime, language)}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
