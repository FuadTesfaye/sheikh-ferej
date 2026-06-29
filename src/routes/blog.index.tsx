import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, WritingListItem } from "@/components/PageLayout";
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
    const handleStorage = () => setPosts(dataService.getPosts());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <SiteLayout>
      <PageHero label={t("blog.label")} title={t("blog.hero")} description={t("blog.subhero")} />

      <section className="container-prose pb-12 sm:pb-16 md:pb-20">
        <ul className="divide-y divide-border border-y border-border">
          {posts.map((p, i) => (
            <WritingListItem
              key={p.slug}
              index={i}
              category={getTextByLang(p.category, language)}
              title={getTextByLang(p.title, language)}
              excerpt={getTextByLang(p.excerpt, language)}
              date={p.date}
              readTime={getTextByLang(p.readTime, language)}
              slug={p.slug}
              LinkComponent={Link}
            />
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}
