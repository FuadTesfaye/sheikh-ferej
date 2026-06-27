import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getTextByLang, emptyMultilingualText } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import { dataService } from "@/lib/data-service";
import pattern from "@/assets/pattern-bg.jpg";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/learn/$courseId")({
  head: ({ params }) => {
    const c = dataService.getCourses().find((x) => x.id === params.courseId);
    const empty = emptyMultilingualText();
    return {
      meta: [
        { title: c ? `${getTextByLang(c.title, "en")} — Learning` : "Course" },
        {
          name: "description",
          content: getTextByLang(c?.description ?? empty, "en"),
        },
      ],
    };
  },
  component: CourseDetail,
});

function CourseNotFound() {
  const { t } = useLanguage();
  return (
    <SiteLayout>
      <div className="container-prose py-32 text-center">
        <p className="font-display text-3xl">{t("learn.courseNotFound")}</p>
        <Link to="/learn" className="btn-outline-gold mt-6 inline-flex">
          {t("learn.allCourses")}
        </Link>
      </div>
    </SiteLayout>
  );
}

function CourseDetail() {
  const { language, t } = useLanguage();
  const { courseId } = Route.useParams();
  const [courses, setCourses] = useState(() => dataService.getCourses());
  const course = courses.find((c) => c.id === courseId);

  useEffect(() => {
    const handleStorage = () => setCourses(dataService.getCourses());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  if (!course) return <CourseNotFound />;

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${pattern})` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        <div className="container-prose relative py-20">
          <Link
            to="/learn"
            className="text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-soft"
          >
            ← {t("learn.allCourses")}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em]">
            <span className="px-2.5 py-1 rounded-full border border-gold/40 text-gold">
              {getTextByLang(course.level, language)}
            </span>
            <span className="text-muted-foreground">
              {getTextByLang(course.duration, language)}
            </span>
            <span className="text-muted-foreground">&middot;</span>
            <span className="text-muted-foreground">
              {course.lessons} {t("home.lessons")}
            </span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl mt-6 max-w-3xl leading-[1.05]">
            {getTextByLang(course.title, language)}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
            {getTextByLang(course.subtitle, language)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-gold">{t("learn.enrollNow")}</button>
            <button className="btn-outline-gold">{t("learn.previewLesson")}</button>
          </div>
        </div>
      </section>

      <section className="container-prose grid lg:grid-cols-[2fr_1fr] gap-12 py-16">
        <div>
          <h2 className="font-display text-3xl">{t("learn.aboutThisCourse")}</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {getTextByLang(course.description, language)}
          </p>

          <h3 className="font-display text-2xl mt-12 text-gold">{t("learn.curriculum")}</h3>
          <ol className="mt-6 space-y-3">
            {course.topics.map((topic, i: number) => (
              <li
                key={getTextByLang(topic, language)}
                className="flex items-center gap-5 p-5 rounded-lg border border-border bg-card/40 hover:border-gold/40 transition"
              >
                <span className="font-display text-2xl text-gold w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="font-display text-xl">{getTextByLang(topic, language)}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    {t("learn.module")} {i + 1}
                  </p>
                </div>
                <span className="text-gold text-xl">▸</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
          <div className="p-6 rounded-xl border border-gold/30 bg-card/60">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">{t("learn.instructor")}</p>
            <p className="font-display text-2xl mt-2">{t("home.mohammedFerej")}</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {t("learn.instructorBio")}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40 space-y-4 text-sm">
            <Row label={t("learn.level")} value={getTextByLang(course.level, language)} />
            <Row
              label={t("lectures.duration")}
              value={getTextByLang(course.duration, language)}
            />
            <Row label={t("home.lessons")} value={String(course.lessons)} />
            <Row label={t("learn.languageLabel")} value={t("learn.amharicAndArabic")} />
            <Row label={t("learn.certificate")} value={t("common.yes")} />
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40">
            <p className="font-arabic text-xl text-gold leading-loose">
              مَن سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا
            </p>
            <p className="text-sm italic text-muted-foreground mt-2">{t("learn.knowledgeHadith")}</p>
          </div>
        </aside>
      </section>
    </SiteLayout>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0">
      <span className="text-muted-foreground uppercase tracking-[0.2em] text-xs">{label}</span>
      <span className="text-foreground">{value}</span>
    </div>
  );
}
