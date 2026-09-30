import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero } from "@/components/PageLayout";
import { getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import { dataService } from "@/lib/data-service";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/learn/")({
  head: () => ({
    meta: [
      { title: "Learning — Structured Islamic Courses" },
      {
        name: "description",
        content:
          "Structured courses in aqeedah, tafsir, fiqh, seerah, Arabic and tazkiyah by Sheikh Mohammed Ferej.",
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
  const { language, t } = useLanguage();
  const [courses, setCourses] = useState(() => dataService.getCourses());

  useEffect(() => {
    const handleStorage = () => setCourses(dataService.getCourses());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <SiteLayout>
      <PageHero label={t("learn.label")} title={t("learn.hero")} description={t("learn.subhero")} />

      <section className="container-prose pb-12 sm:pb-16 md:pb-20">
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {courses.map((c) => (
            <Link
              key={c.id}
              to="/learn/$courseId"
              params={{ courseId: c.id }}
              className="group relative p-5 sm:p-6 md:p-8 rounded-2xl border border-border bg-gradient-to-br from-card to-card/40 hover:border-gold/60 hover:shadow-[0_30px_80px_-40px_rgba(0,0,0,0.8)] transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em]">
                <span className={`px-2.5 py-1 rounded-full border w-fit ${levelTint[c.level.en]}`}>
                  {getTextByLang(c.level, language)}
                </span>
                <span className="text-muted-foreground">
                  {c.lessons} {t("home.lessons")} &middot; {getTextByLang(c.duration, language)}
                </span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl mt-4 sm:mt-6 group-hover:text-gold transition leading-snug">
                {getTextByLang(c.title, language)}
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">{getTextByLang(c.subtitle, language)}</p>

              <ul className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                {c.topics.slice(0, 4).map((topic) => (
                  <li key={getTextByLang(topic, language)} className="flex items-start gap-2 min-w-0">
                    <span className="text-gold shrink-0 mt-0.5">◆</span>
                    <span className="line-clamp-2">{getTextByLang(topic, language)}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-8">
                <span className="text-gold text-xs sm:text-sm uppercase tracking-[0.2em]">
                  {t("common.viewCourse")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
