import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { courses, getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import pattern from "@/assets/pattern-bg.jpg";

export const Route = createFileRoute("/learn/$courseId")({
  head: ({ params }) => {
    const c = courses.find((x) => x.id === params.courseId);
    return {
      meta: [
        { title: c ? `${getTextByLang(c.title, "en")} — Learning` : "Course" },
        { name: "description", content: getTextByLang(c?.description ?? { en: "", am: "", ar: "" }, "en") },
      ],
    };
  },
  loader: ({ params }) => {
    const course = courses.find((c) => c.id === params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  component: CourseDetail,
  notFoundComponent: () => (
    <CourseNotFound />
  ),
});

function CourseNotFound() {
  const { language, t } = useLanguage();
  return (
    <SiteLayout>
      <div className="container-prose py-32 text-center">
        <p className="font-display text-3xl">
          {language === "en" ? "Course not found" :
           language === "am" ? "ኮርሱ አልተገኘም" :
           "لم يتم العثور على الدورة"}
        </p>
        <Link to="/learn" className="btn-outline-gold mt-6 inline-flex">
          {t.allCourses}
        </Link>
      </div>
    </SiteLayout>
  );
}

function CourseDetail() {
  const { language, t } = useLanguage();
  const { course } = Route.useLoaderData();

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
            ← {t.allCourses}
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em]">
            <span className="px-2.5 py-1 rounded-full border border-gold/40 text-gold">
              {getTextByLang(course.level, language)}
            </span>
            <span className="text-muted-foreground">{getTextByLang(course.duration, language)}</span>
            <span className="text-muted-foreground">&middot;</span>
            <span className="text-muted-foreground">{course.lessons} {t.lessons}</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl mt-6 max-w-3xl leading-[1.05]">
            {getTextByLang(course.title, language)}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl">
            {getTextByLang(course.subtitle, language)}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-gold">
              {language === "en" ? "Enroll now" : language === "am" ? "አሁን ይመዝገቡ" : "سجل الآن"}
            </button>
            <button className="btn-outline-gold">
              {language === "en" ? "Preview a lesson" : language === "am" ? "አንድ ትምህርት ይመልከቱ" : "معاينة درس"}
            </button>
          </div>
        </div>
      </section>

      <section className="container-prose grid lg:grid-cols-[2fr_1fr] gap-12 py-16">
        <div>
          <h2 className="font-display text-3xl">
            {language === "en" ? "About this course" : language === "am" ? "ስለዚህ ኮርስ" : "حول هذه الدورة"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {getTextByLang(course.description, language)}
          </p>

          <h3 className="font-display text-2xl mt-12 text-gold">
            {language === "en" ? "Curriculum" : language === "am" ? "ምዕራብ" : "المنهج"}
          </h3>
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
                    {language === "en" ? "Module" : language === "am" ? "ክፍል" : "وحدة"} {i + 1}
                  </p>
                </div>
                <span className="text-gold text-xl">▸</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
          <div className="p-6 rounded-xl border border-gold/30 bg-card/60">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">
              {language === "en" ? "Instructor" : language === "am" ? "መምሪያ" : "المدرب"}
            </p>
            <p className="font-display text-2xl mt-2">Sheikh Mohammed Ferej</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {language === "en" ? "Ethiopian Islamic scholar with two decades of teaching in the sacred sciences." :
               language === "am" ? "ኢትዮጵያዊ እስላማዊ ምሁር በሁለት አስርት ዓመታት በቅዱስ ሳይንሶች ትምህርት ያለው።" :
               "عالم إسلامي إثيوبي بعقدين من التدريس في العلوم الشرعية."}
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40 space-y-4 text-sm">
            <Row
              label={t.level}
              value={getTextByLang(course.level, language)}
            />
            <Row
              label={language === "en" ? "Duration" : language === "am" ? "ቀጣይነት" : "المدة"}
              value={getTextByLang(course.duration, language)}
            />
            <Row
              label={t.lessons}
              value={String(course.lessons)}
            />
            <Row
              label={language === "en" ? "Language" : language === "am" ? "ቋንቋ" : "اللغة"}
              value={language === "en" ? "Amharic & Arabic" : language === "am" ? "አማርኛ & አረብኛ" : "الأمهرية والعربية"}
            />
            <Row
              label={language === "en" ? "Certificate" : language === "am" ? "የምስክር ወረቀት" : "الشهادة"}
              value={language === "en" ? "Yes" : language === "am" ? "አዎ" : "نعم"}
            />
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40">
            <p className="font-arabic text-xl text-gold leading-loose">
              مَن سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا
            </p>
            <p className="text-sm italic text-muted-foreground mt-2">
              {language === "en" ? '"Whoever travels a path seeking knowledge, Allah will make easy for him a path to Paradise." — Muslim' :
               language === "am" ? '"እውቀትን የሚፈልግ ሰው አንድ መንገድ ይዘራል፣ አላህ ለእርሱ ወደ ጀነት መንገድ ይቀላልለታል።" — ሙስሊም' :
               '"من سلك طريقًا يلتمس فيه علمًا، سهّل الله له به طريقًا إلى الجنة." — مسلم'}
            </p>
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
