import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { biography, specialties, getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import scholar from "@/assets/about.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Sheikh Mohammed Ferej" },
      {
        name: "description",
        content:
          "The life, studies, and teaching of Sheikh Mohammed Ferej — Ethiopian Islamic scholar.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { language, t } = useLanguage();
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-16 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30">
            <img
              src={scholar}
              alt={
                language === "en"
                  ? "Sheikh Mohammed Ferej"
                  : language === "am"
                    ? "ሼክ መሐመድ ፈረጅ"
                    : "الشيخ محمد فرج"
              }
              className="w-full h-full object-cover"
            />
          </div>
          <p className="font-arabic text-xl text-gold-soft text-center mt-6 leading-loose">
            وَقُل رَّبِّ زِدْنِي عِلْمًا
          </p>
          <p className="text-center text-sm text-muted-foreground italic">
            {language === "en"
              ? `"My Lord, increase me in knowledge."`
              : language === "am"
                ? `"እግዚአብሔሬ፣ በእውቀቴ ብጠምድርኝ።"`
                : `"ربِّ زدني علماً."`}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            {language === "en" ? "About the sheikh" : language === "am" ? "ስለ ሼኩ" : "عن الشيخ"}
          </p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            {language === "en"
              ? "A teacher in the long chain of those who serve the deen."
              : language === "am"
                ? "የዲንን የሚያገለግሉ ሰዎች ረጅም ሰንሰለት ውስጥ አንድ መምሪያ።"
                : "مدرس في السلسلة الطويلة من الذين يخدمون الدين."}
          </h1>

          <div className="mt-10 space-y-6 text-lg leading-[1.85] text-foreground/90">
            <p>
              <span className="font-display text-5xl float-left mr-3 leading-none text-gold">
                {language === "ar" ? "الش" : "S"}
              </span>
              {language === "en"
                ? "Sheikh Mohammed Ferej is an Ethiopian Islamic scholar, teacher, and caller to Allah. He memorized the Qur'an in his youth and devoted his life to studying and transmitting the classical Islamic sciences in his homeland."
                : language === "am"
                  ? "ሼክ መሐመድ ፈረጅ ኢትዮጵያዊ ኢስላማዊ ምሁር፣ መምሪያ እና ወደ አላህ የሚጋራ ሰው ነው። በሕፃናት ውስጥ ቁርአንን ግብርቶ በሀገሪቱ ላይ ቀደምት ኢስላማዊ ሳይንስ እንድያጠናን እንድያሰራበት ሕይወቱን ወሰደ።"
                  : "الشيخ محمد فرج عالم إسلامي إثيوبي، مدرس، وداعي إلى الله. حفظ القرآن في شبابه وت devoted حياته لدراسة ونقل العلوم الإسلامية الكلاسيكية في بلده."}
            </p>
            <p>
              {language === "en"
                ? "His teaching is plainspoken and rooted in evidence — drawing on tafsir, hadith, and the writings of the early scholars, while addressing the questions of the modern Muslim with mercy and clarity."
                : language === "am"
                  ? "ትምህርቱ ቀላል እና በ ሰምዶች ላይ የተመሰረተ ነው፣ በተፍሲር፣ በሀዲዝ እና በቀደምት ዑለማዎች ጽሑፎች ላይ እንዲሰማ በማድረግ ዘመናዊ ሙስሊምን ጥያቄዎችን በርህምነት እና በግልጽነት ይመልሳል።"
                  : "تعلمه واضح وموثوق بالدليل — يعتمد على التفسير والحديث ومقالات العلماء الأوائل، مع معالجة أسئلة المسلم الحديث بالرحمة والوضوح."}
            </p>
            <p>
              {language === "en"
                ? "Today his lectures reach thousands weekly through Facebook, TikTok and Telegram, and his structured online courses welcome students from across Ethiopia and the wider ummah."
                : language === "am"
                  ? "ዛሬ ትምህርቶቹ በፌስቡክ፣ ቲክቶክ እና ቴሌግራም በሳምንት ላይ በሺዎች እንዲደርሱ ይችላሉ, እና በተዘጋጁ የመስመር ላይ ኮርሶቹ ከኢትዮጵያ እና ከሰባዊው ዙሪያም ተማሪዎችን ይከታተላሉ።"
                  : "اليوم تصل محاضراته الآلاف أسبوعياً عبر فيسبوك وتيكتوك وتليجرام، ودوراته الأونلاين المنظمة ترحب بالطلاب من جميع أنحاء إثيوبيا والأمة الأوسع."}
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <div className="ornament-divider text-xs uppercase tracking-[0.3em] justify-start">
              {language === "en" ? "The path" : language === "am" ? "መንገድ" : "الطريق"}
            </div>
            <ol className="mt-10 relative border-l-2 border-gold/30 pl-8 space-y-10">
              {biography.map((b) => (
                <li key={getTextByLang(b.title, language)} className="relative">
                  <span className="absolute -left-[37px] top-1 grid place-items-center h-5 w-5 rounded-full border-2 border-gold bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">
                    {getTextByLang(b.year, language)}
                    {b.place ? ` · ${getTextByLang(b.place, language)}` : ""}
                  </p>
                  <h3 className="font-display text-2xl mt-1">{getTextByLang(b.title, language)}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {getTextByLang(b.detail, language)}
                  </p>
                </li>
              ))}
            </ol>
          </div>

          {/* Specialties */}
          <div className="mt-20">
            <div className="ornament-divider text-xs uppercase tracking-[0.3em] justify-start">
              {language === "en"
                ? "Areas of specialty"
                : language === "am"
                  ? "የምርጫ ሰርቶች"
                  : "مجالات التخصص"}
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
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

          {/* Methodology */}
          <div className="mt-20">
            <div className="ornament-divider text-xs uppercase tracking-[0.3em] justify-start">
              {language === "en" ? "Methodology" : language === "am" ? "ዘዴ" : "المنهج"}
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  t: {
                    en: "Rooted in evidence",
                    am: "በ ሰምዶች ላይ የተመሰረተ",
                    ar: "مؤسس بالدليل",
                  },
                  d: {
                    en: "Every ruling traced to the Qur'an, the Sunnah, and the understanding of the early generations.",
                    am: "እያንዳንዱ ሕግም ወደ ቁርአን፣ ሱና እና የቀደምት ትውልድ አስተዳደግ ይመልሳል።",
                    ar: "كل حكم يُعزى إلى القرآن والسنة وفهم السلف الصالح.",
                  },
                },
                {
                  t: {
                    en: "Spoken with mercy",
                    am: "በርህምነት ይነገራል",
                    ar: "مقول بالرحمة",
                  },
                  d: {
                    en: "Knowledge delivered with the gentleness of a teacher who remembers being a student.",
                    am: "እውቀት በተማሪነት ስለነበረ የሚያስታውስ መምሪያ ስሜት ይሰጣል።",
                    ar: "العلم يُلقي بلطف مدرس يتذكر كونه طالباً.",
                  },
                },
                {
                  t: {
                    en: "Lived, not only taught",
                    am: "እንደሚኖር ይሰራል ሳይቀጠር",
                    ar: "ممارس لا مجرد تعليم",
                  },
                  d: {
                    en: "The aim is transformation: worship, character, and a heart drawn to Allah.",
                    am: "እርምጃው ለውጥ ነው፡ አምልኮ፣ ባህርነት እና ወደ አላህ የሚሳብ ልብ።",
                    ar: "الغاية هي التغيير: العبادة والخلق وقلب منجذب إلى الله.",
                  },
                },
              ].map((x) => (
                <div
                  key={getTextByLang(x.t, language)}
                  className="p-6 rounded-lg border border-border bg-card/40"
                >
                  <h4 className="font-display text-xl text-gold">{getTextByLang(x.t, language)}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {getTextByLang(x.d, language)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 rounded-xl border border-gold/30 bg-card/40 text-center">
            <p className="font-arabic text-2xl text-gold leading-loose">
              مَن سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى
              الْجَنَّةِ
            </p>
            <p className="mt-3 italic text-foreground/90">
              {language === "en"
                ? `"Whoever travels a path seeking knowledge, Allah will make easy for him a path to Paradise."`
                : language === "am"
                  ? `"እውቀትን የሚፈልግ ሰው አንድ መንገድ ይዘራል፣ አላህ ለእርሱ ወደ ጀነት መንገድን ይቀላልለታል።"`
                  : `"من سلك طريقاً يلتمس فيه علماً، سهل الله له به طريقاً إلى الجنة."`}
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
              {t.sahihMuslim}
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/learn" className="btn-gold text-sm py-2.5 px-5">
                {t.beginLearning}
              </Link>
              <Link to="/lectures" className="btn-outline-gold text-sm py-2.5 px-5">
                {t.listenToLectures}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
