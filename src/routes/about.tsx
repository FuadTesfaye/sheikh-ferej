import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { biography, specialties } from "@/lib/content";
import scholar from "@/assets/image copy.png";

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
  return (
    <SiteLayout>
      <section className="container-prose pt-20 pb-16 grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
        <div className="lg:sticky lg:top-28">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30">
            <img src={scholar} alt="Sheikh Mohammed Ferej" className="w-full h-full object-cover" />
          </div>
          <p className="font-arabic text-xl text-gold-soft text-center mt-6 leading-loose">
            وَقُل رَّبِّ زِدْنِي عِلምًا
          </p>
          <p className="text-center text-sm text-muted-foreground italic">
            "My Lord, increase me in knowledge."
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">About the sheikh</p>
          <h1 className="font-display text-5xl md:text-6xl mt-4 leading-[1.05]">
            A teacher in the long chain of those who serve the deen.
          </h1>

          <div className="mt-10 space-y-6 text-lg leading-[1.85] text-foreground/90">
            <p>
              <span className="font-display text-5xl float-left mr-3 leading-none text-gold">
                S
              </span>
              heikh Mohammed Ferej is an Ethiopian Islamic scholar, teacher, and caller to Allah. He
              memorized the Qur'an in his youth and devoted his life to studying and transmitting
              the classical Islamic sciences in his homeland.
            </p>
            <p>
              His teaching is plainspoken and rooted in evidence — drawing on tafsir, hadith, and
              the writings of the early scholars, while addressing the questions of the modern
              Muslim with mercy and clarity.
            </p>
            <p>
              Today his lectures reach thousands weekly through Facebook, TikTok and Telegram, and
              his structured online courses welcome students from across Ethiopia and the wider
              ummah.
            </p>
          </div>

          {/* Timeline */}
          <div className="mt-16">
            <div className="ornament-divider text-xs uppercase tracking-[0.3em] justify-start">
              The path
            </div>
            <ol className="mt-10 relative border-l-2 border-gold/30 pl-8 space-y-10">
              {biography.map((b) => (
                <li key={b.title} className="relative">
                  <span className="absolute -left-[37px] top-1 grid place-items-center h-5 w-5 rounded-full border-2 border-gold bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold">
                    {b.year}
                    {b.place ? ` · ${b.place}` : ""}
                  </p>
                  <h3 className="font-display text-2xl mt-1">{b.title}</h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{b.detail}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Specialties */}
          <div className="mt-20">
            <div className="ornament-divider text-xs uppercase tracking-[0.3em] justify-start">
              Areas of specialty
            </div>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {specialties.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card/40"
                >
                  <span className="text-gold">◆</span>
                  <span className="text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div className="mt-20">
            <div className="ornament-divider text-xs uppercase tracking-[0.3em] justify-start">
              Methodology
            </div>
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              {[
                {
                  t: "Rooted in evidence",
                  d: "Every ruling traced to the Qur'an, the Sunnah, and the understanding of the early generations.",
                },
                {
                  t: "Spoken with mercy",
                  d: "Knowledge delivered with the gentleness of a teacher who remembers being a student.",
                },
                {
                  t: "Lived, not only taught",
                  d: "The aim is transformation: worship, character, and a heart drawn to Allah.",
                },
              ].map((x) => (
                <div key={x.t} className="p-6 rounded-lg border border-border bg-card/40">
                  <h4 className="font-display text-xl text-gold">{x.t}</h4>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 p-8 rounded-xl border border-gold/30 bg-card/40 text-center">
            <p className="font-arabic text-2xl text-gold leading-loose">
              مَن سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ
            </p>
            <p className="mt-3 italic text-foreground/90">
              "Whoever travels a path seeking knowledge, Allah will make easy for him a path to
              Paradise."
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-2">
              Sahih Muslim
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <Link to="/learn" className="btn-gold text-sm py-2.5 px-5">
                Begin a course
              </Link>
              <Link to="/lectures" className="btn-outline-gold text-sm py-2.5 px-5">
                Listen to lectures
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
