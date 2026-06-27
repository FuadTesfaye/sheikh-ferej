import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import scholar from "@/assets/main.png";
import pattern from "@/assets/pattern-bg.jpg";
import lectureImg from "@/assets/stage.png";
import { dataService } from "@/lib/data-service";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheikh Muhammed Ferej Megeno — Islamic Scholar, Sharia Consultant & Lecturer" },
      {
        name: "description",
        content:
          "Official site of Sheikh Muhammed Ferej Megeno, Ethiopian Islamic scholar and Sharia consultant. Lectures, writings, and structured courses in the classical Islamic sciences.",
      },
    ],
  }),
  component: Home,
});

const teachingAreas = [
  { ar: "ﺍ", key: "quranTafsir" },
  { ar: "ﺏ", key: "aqeedahFiqh" },
  { ar: "ﺝ", key: "seerahTazkiyah" },
] as const;

function Home() {
  const { language, t } = useLanguage();
  const [posts, setPosts] = useState(() => dataService.getPosts());
  const [courses, setCourses] = useState(() => dataService.getCourses());
  const [lectures, setLectures] = useState(() => dataService.getLectures());

  useEffect(() => {
    const handleStorage = () => {
      setPosts(dataService.getPosts());
      setCourses(dataService.getCourses());
      setLectures(dataService.getLectures());
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const latestLecture = lectures[0];
  const recentPosts = posts.slice(0, 2);
  const featuredCourse = courses[0];

  return (
    <SiteLayout>
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.06] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${pattern})` }}
          aria-hidden
        />
        <div className="container-prose relative grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center pt-20 pb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold">{t("home.assalamuAlaykum")}</p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              {t("home.sheikh")}
              <span className="block italic text-gold">{t("home.mohammedFerej")}</span>
            </h1>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t("home.subtitle")}
            </p>
            <p className="mt-8 text-lg text-foreground/85 max-w-xl leading-relaxed">{t("home.bio")}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/lectures" className="btn-gold">
                {t("home.listenToLectures")}
              </Link>
              <Link to="/learn" className="btn-outline-gold">
                {t("home.studyWithTheSheikh")}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-8">
              <Stat k="35+" v={t("home.yearsTeaching")} />
              <Stat k="60+" v={t("home.lecturesOnline")} />
              <Stat k="4.5K" v={t("home.telegramFollowers")} />
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={scholar}
                alt={t("home.scholarImageAlt")}
                width={896}
                height={1152}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block max-w-xs p-5 rounded-xl border border-gold/40 bg-background/95 backdrop-blur shadow-soft">
              <p className="font-arabic text-lg text-gold leading-relaxed" lang="ar">
                وَمَنْ أَحْسَنُ قَوْلًا مِمَّنْ دَعَا إِلَى اللَّهِ
              </p>
              <p className="text-xs italic text-muted-foreground mt-2">{t("home.ayahCallToAllah")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card/30">
        <div className="container-prose py-12 text-center">
          <p className="font-arabic text-3xl md:text-4xl text-gold leading-loose" lang="ar">
            إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ
          </p>
          <p className="mt-3 text-foreground/90 italic">{t("home.ayahAlFatir")}</p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {t("home.surahFatirRef")}
          </p>
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{t("home.fromTheMinbar")}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t("home.latestLecture")}</h2>
          </div>
          <Link to="/lectures" className="btn-outline-gold text-sm py-2.5 px-5">
            {t("home.allLectures")} →
          </Link>
        </div>

        <Link
          to="/lectures"
          className="group grid md:grid-cols-[1.2fr_1fr] gap-8 rounded-2xl border border-border hover:border-gold/60 overflow-hidden bg-card/40 transition"
        >
          <div className="relative aspect-video md:aspect-auto min-h-[280px]">
            <img
              src={lectureImg}
              alt={getTextByLang(latestLecture.title, language)}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            <span className="absolute inset-0 grid place-items-center">
              <span className="grid place-items-center h-16 w-16 rounded-full bg-gold/90 text-primary-foreground pl-1 text-2xl shadow-xl group-hover:scale-110 transition">
                ▶
              </span>
            </span>
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="text-xs uppercase tracking-[0.25em] text-gold">
              {getTextByLang(latestLecture.topic, language)} ·{" "}
              {getTextByLang(latestLecture.duration, language)}
            </div>
            <h3 className="font-display text-3xl mt-3 group-hover:text-gold transition">
              {getTextByLang(latestLecture.title, language)}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {getTextByLang(latestLecture.description, language)}
            </p>
            <p className="mt-6 text-xs text-muted-foreground uppercase tracking-[0.2em]">
              {latestLecture.date}
            </p>
          </div>
        </Link>
      </section>

      <section className="container-prose py-12">
        <div className="ornament-divider text-xs uppercase tracking-[0.3em]">
          {t("home.areasOfTeaching")}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {teachingAreas.map((p) => (
            <div key={p.key} className="bg-background p-8 hover:bg-card/40 transition">
              <span className="font-arabic text-5xl text-gold/50" lang="ar">
                {p.ar}
              </span>
              <h3 className="font-display text-2xl mt-4 text-gold">{t(`home.${p.key}`)}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {t(`home.${p.key}Desc`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{t("home.featuredCourse")}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">
              {getTextByLang(featuredCourse.title, language)}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {getTextByLang(featuredCourse.description, language)}
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-gold">{getTextByLang(featuredCourse.level, language)}</span>
              <span>·</span>
              <span>{getTextByLang(featuredCourse.duration, language)}</span>
              <span>·</span>
              <span>
                {featuredCourse.lessons} {t("home.lessons")}
              </span>
            </div>
            <Link
              to="/learn/$courseId"
              params={{ courseId: featuredCourse.id }}
              className="btn-gold mt-8"
            >
              {t("home.enterTheCourse")}
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {featuredCourse.topics.map((topic, i) => (
              <li
                key={i}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/40"
              >
                <span className="font-display text-xl text-gold w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{getTextByLang(topic, language)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-prose py-20 border-t border-border">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{t("home.recentWritings")}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t("home.fromTheDesk")}</h2>
          </div>
          <Link to="/blog" className="btn-outline-gold text-sm py-2.5 px-5">
            {t("home.allWritings")} →
          </Link>
        </div>
        <ul className="divide-y divide-border border-y border-border">
          {recentPosts.map((p, i) => (
            <li key={p.slug}>
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group grid md:grid-cols-[60px_140px_1fr_auto] gap-6 items-start py-6 px-2 hover:bg-card/40 transition"
              >
                <span className="font-display text-3xl text-gold/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-gold pt-2">
                  {getTextByLang(p.category, language)}
                </span>
                <div>
                  <h3 className="font-display text-2xl group-hover:text-gold transition">
                    {getTextByLang(p.title, language)}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2 max-w-2xl">
                    {getTextByLang(p.excerpt, language)}
                  </p>
                </div>
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground pt-2 whitespace-nowrap">
                  {p.date}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </SiteLayout>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="font-display text-3xl text-gold">{k}</dt>
      <dd className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">{v}</dd>
    </div>
  );
}
