import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import scholar from "@/assets/image.png";
import pattern from "@/assets/pattern-bg.jpg";
import lectureImg from "@/assets/image copy 2.png";
import { dataService } from "@/lib/data-service";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sheikh Mohammed Ferej — Islamic Scholar, Lectures & Learning" },
      {
        name: "description",
        content:
          "Official site of Sheikh Mohammed Ferej, Ethiopian Islamic scholar. Lectures, writings, and structured courses in the classical Islamic sciences.",
      },
    ],
  }),
  component: Home,
});

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
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.06] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${pattern})` }}
          aria-hidden
        />
        <div className="container-prose relative grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center pt-20 pb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
              {language === "ar" ? "السلام عليكم" : "السلام عليكم · Welcome"}
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              {language === "ar" ? "الشيخ" : "Sheikh"}
              <span className="block italic text-gold">
                {language === "ar" ? "محمد فرج" : "Mohammed Ferej"}
              </span>
            </h1>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {language === "am" ? "ኢትዮጵያዊ ኢስላማዊ ምሁር · ቅዱስ ሳይንስ መምሪያ" : t.islamicScholar}
            </p>
            <p className="mt-8 text-lg text-foreground/85 max-w-xl leading-relaxed">
              {language === "en"
                ? "For more than two decades, Sheikh Mohammed Ferej has taught the Qur'an, Sunnah and classical Islamic sciences to students in Ethiopia and around the world. This is the home of his lectures, writings, and structured courses."
                : language === "am"
                  ? "ለከ20 ዓመታት በላይ ሼክ መሐመድ ፈረጅ በኢትዮጵያ እና በዓለም ዙሪያ ተማሪዎችን ቁርአን፣ ሱና እና ቀደምት ኢስላማዊ ሳይንስ እንደማስተማር ቀድሟል። ይህ የትምህርቶቹ፣ ጽሑፎቹ እና ተቀናብሯል ኮርሶች ቤት ነው።"
                  : "لأكثر من عقدين، درس الشيخ محمد فرج القرآن والسنة والعلوم الإسلامية الكلاسيكية لطلاب في إثيوبيا وحول العالم. هذا هو منزله المحاضرات، ومقالاته، ودوراته المنظمة."}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/lectures" className="btn-gold">
                {t.listenToLectures}
              </Link>
              <Link to="/learn" className="btn-outline-gold">
                {t.studyWithTheSheikh}
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-8">
              <Stat k="20+" v={t.yearsTeaching} />
              <Stat k="60+" v={t.lecturesOnline} />
              <Stat k="4.5K" v={t.telegramFollowers} />
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={scholar}
                alt={
                  language === "en"
                    ? "Sheikh Mohammed Ferej"
                    : language === "am"
                      ? "ሼክ መሐመድ ፈረጅ"
                      : "الشيخ محمد فرج"
                }
                width={896}
                height={1152}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden md:block max-w-xs p-5 rounded-xl border border-gold/40 bg-background/95 backdrop-blur shadow-soft">
              <p className="font-arabic text-lg text-gold leading-relaxed" lang="ar">
                وَمَنْ أَحْسَنُ قَوْلًا مِمَّنْ دَعَا إِلَى اللَّهِ
              </p>
              <p className="text-xs italic text-muted-foreground mt-2" lang="am">
                "ወደ አላህ ከጠራ ሰው ይበልጥ ንግግሩ ያማረ ማን ነው?"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ayah Band */}
      <section className="border-b border-border bg-card/30">
        <div className="container-prose py-12 text-center">
          <p className="font-arabic text-3xl md:text-4xl text-gold leading-loose" lang="ar">
            إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ
          </p>
          <p className="mt-3 text-foreground/90 italic" lang="am">
            "በእውነት አላህን ከባሮቹ ውስጥ የሚፈሩት አዋቂዎች (ዑለማኦች) ብቻ ናቸው::"
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {language === "en"
              ? "Surah Fatir · 35:28"
              : language === "am"
                ? "ሱራት ፋጥር · 35:28"
                : "سورة فاطر · 35:28"}
          </p>
        </div>
      </section>

      {/* Latest Lecture */}
      <section className="container-prose py-20">
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.fromTheMinbar}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t.latestLecture}</h2>
          </div>
          <Link to="/lectures" className="btn-outline-gold text-sm py-2.5 px-5">
            {t.allLectures} →
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

      {/* Teaching Areas */}
      <section className="container-prose py-12">
        <div className="ornament-divider text-xs uppercase tracking-[0.3em]">
          {t.areasOfTeaching}
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {[
            {
              ar: "ﺍ",
              am: "ቁርአን እና ተፍሲር",
              en: "Quran & Tafsir",
              desc: {
                en: "Exegesis of the Quran based on the works of the early scholars.",
                am: "በቀደምት ዑለማኦች ስራዎች ላይ የተመሰረተ የቁርአን ትንታኔ (ተፍሲር)።",
                ar: "تفسير القرآن على أساس عمل العلماء الأوائل.",
              },
            },
            {
              ar: "ﺏ",
              am: "አቂዳ እና ፊቅህ",
              en: "Aqeedah & Fiqh",
              desc: {
                en: "Belief of Ahl as-Sunnah and the rules of worship and daily life.",
                am: "የአህለሱና ወልጀመዓ አቂዳ እና የእለት ተእለት የአምልኮ እና የህይወት ህጎች (ፊቅህ)።",
                ar: "عقيدة أهل السنة وأحكام العبادة والحياة اليومية.",
              },
            },
            {
              ar: "ﺝ",
              am: "ሲራ እና ተዝኪያ",
              en: "Seerah & Tazkiyah",
              desc: {
                en: "Life of the Prophet (SAW) and purification of the heart.",
                am: "የነቢዩ (ሰ.ዐ.ወ) የህይወት ታሪክ እና የልብ ንፅህና (ተዝኪያ) ትምህርቶች።",
                ar: "سيرة النبي صلى الله عليه وسلم وتزكية النفس.",
              },
            },
          ].map((p, idx) => (
            <div key={idx} className="bg-background p-8 hover:bg-card/40 transition">
              <span className="font-arabic text-5xl text-gold/50" lang="ar">
                {p.ar}
              </span>
              <h3 className="font-display text-2xl mt-4 text-gold">
                {getTextByLang({ en: p.en, am: p.am, ar: p.am }, language)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {getTextByLang(p.desc, language)}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Course */}
      <section className="container-prose py-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.featuredCourse}</p>
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
                {featuredCourse.lessons} {t.lessons}
              </span>
            </div>
            <Link
              to="/learn/$courseId"
              params={{ courseId: featuredCourse.id }}
              className="btn-gold mt-8"
            >
              {t.enterTheCourse}
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

      {/* Recent Posts */}
      <section className="container-prose py-20 border-t border-border">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">{t.recentWritings}</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{t.fromTheDesk}</h2>
          </div>
          <Link to="/blog" className="btn-outline-gold text-sm py-2.5 px-5">
            {t.allWritings} →
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
