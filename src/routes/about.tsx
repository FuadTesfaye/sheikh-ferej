import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { biography, specialties, getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import scholar from "@/assets/about.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sheikh Muhammed Ferej Megeno" },
      {
        name: "description",
        content:
          "The life, studies, and teaching of Sheikh Muhammed Ferej Megeno — Ethiopian Islamic scholar.",
      },
    ],
  }),
  component: About,
});

const methodology = [
  { titleKey: "rootedInEvidence", descKey: "rootedInEvidenceDesc" },
  { titleKey: "spokenWithMercy", descKey: "spokenWithMercyDesc" },
  { titleKey: "livedNotOnlyTaught", descKey: "livedNotOnlyTaughtDesc" },
] as const;

function About() {
  const { language, t } = useLanguage();
  return (
    <SiteLayout>
      <section className="container-prose page-hero pb-8 sm:pb-12 md:pb-16 grid lg:grid-cols-[minmax(0,1fr)_1.4fr] gap-8 md:gap-12 lg:gap-16 items-start">
        <div className="lg:sticky lg:top-28 mx-auto w-full max-w-sm lg:max-w-none">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30">
            <img
              src={scholar}
              alt={t("about.scholarImageAlt")}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-arabic text-xl text-gold-soft text-center mt-6 leading-loose">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
          <p className="text-center text-sm text-muted-foreground italic">
            {t("about.lordIncreaseKnowledge")}
          </p>
        </div>

        <div className="min-w-0">
          <p className="section-label">{t("about.label")}</p>
          <h1 className="page-title mt-3 sm:mt-4">{t("about.heroTitle")}</h1>

          <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6 text-base sm:text-lg leading-[1.85] text-foreground/90">
            <p>
              <span className="font-display text-4xl sm:text-5xl float-left mr-2 sm:mr-3 leading-none text-gold">
                {language === "ar" ? "الش" : "S"}
              </span>
              {t("about.bio1")}
            </p>
            <p>{t("about.bio2")}</p>
            <p>{t("about.bio3")}</p>
          </div>

          <div className="mt-12 sm:mt-16">
            <div className="ornament-divider section-label justify-start">
              {t("about.thePath")}
            </div>
            <ol className="mt-8 sm:mt-10 relative border-l-2 border-gold/30 pl-5 sm:pl-8 space-y-8 sm:space-y-10">
              {biography.map((b) => (
                <li key={getTextByLang(b.title, language)} className="relative">
                  <span className="absolute -left-[29px] sm:-left-[37px] top-1 grid place-items-center h-4 w-4 sm:h-5 sm:w-5 rounded-full border-2 border-gold bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">
                    {getTextByLang(b.year, language)}
                    {b.place ? ` · ${getTextByLang(b.place, language)}` : ""}
                  </p>
                  <h3 className="font-display text-xl sm:text-2xl mt-1">{getTextByLang(b.title, language)}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {getTextByLang(b.detail, language)}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 sm:mt-20">
            <div className="ornament-divider section-label justify-start">
              {t("about.areasOfSpecialty")}
            </div>
            <ul className="mt-6 sm:mt-8 grid sm:grid-cols-2 gap-2 sm:gap-3">
              {specialties.map((s) => (
                <li
                  key={getTextByLang(s, language)}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40"
                >
                  <span className="text-gold">◆</span>
                  <span className="text-sm">{getTextByLang(s, language)}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 sm:mt-20">
            <div className="ornament-divider section-label justify-start">
              {t("about.methodology")}
            </div>
            <div className="mt-6 sm:mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {methodology.map((x) => (
                <div
                  key={x.titleKey}
                  className="p-6 rounded-lg border border-border bg-card/40"
                >
                  <h4 className="font-display text-xl text-gold">{t(`about.${x.titleKey}`)}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {t(`about.${x.descKey}`)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 sm:mt-16 p-5 sm:p-8 rounded-xl border border-gold/30 bg-card/40 text-center">
            <p className="font-arabic text-xl sm:text-2xl text-gold leading-loose" lang="ar">
              مَن سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى
              الْجَنَّةِ
            </p>
            <p className="mt-3 italic text-foreground/90">{t("about.knowledgePathHadith")}</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
              {t("about.sahihMuslim")}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/learn" className="btn-gold text-sm py-2.5 px-5">
                {t("nav.beginLearning")}
              </Link>
              <Link to="/lectures" className="btn-outline-gold text-sm py-2.5 px-5">
                {t("home.listenToLectures")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
