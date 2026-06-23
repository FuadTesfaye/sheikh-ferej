import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { posts, courses, lectures } from "@/lib/content";
import scholar from "@/assets/image.png";
import pattern from "@/assets/pattern-bg.jpg";
import lectureImg from "@/assets/image copy 2.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ustaz Muhammad Ferej — Islamic Scholar, Lectures & Learning" },
      {
        name: "description",
        content:
          "Official site of Ustaz Muhammad Ferej, Ethiopian Islamic scholar. Lectures, writings, and structured courses in the classical Islamic sciences.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const latestLecture = lectures[0];
  const recentPosts = posts.slice(0, 3);
  const featuredCourse = courses[0];

  return (
    <SiteLayout>
      {/* HERO — scholar-forward */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 opacity-[0.06] bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url(${pattern})` }}
          aria-hidden
        />
        <div className="container-prose relative grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center pt-20 pb-24">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
              السلام عليكم &middot; Welcome
            </p>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.02]">
              Sheikh
              <span className="block italic text-gold">Mohammed Ferej</span>
            </h1>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Ethiopian Islamic scholar &middot; Teacher of the sacred sciences
            </p>
            <p className="mt-8 text-lg text-foreground/85 max-w-xl leading-relaxed">
              For more than two decades, Sheikh Mohammed Ferej has taught the Qur'an, Sunnah and the
              classical Islamic sciences to students in Ethiopia and beyond. This is the home of his
              lectures, writings, and structured courses.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/lectures" className="btn-gold">
                Listen to lectures
              </Link>
              <Link to="/learn" className="btn-outline-gold">
                Study with the sheikh
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md border-t border-border pt-8">
              <Stat k="20+" v="Years teaching" />
              <Stat k="60+" v="Lectures online" />
              <Stat k="4.5K" v="Telegram followers" />
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" aria-hidden />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold/30 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
              <img
                src={scholar}
                alt="Sheikh Mohammed Ferej"
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

      {/* AYAH BAND */}
      <section className="border-b border-border bg-card/30">
        <div className="container-prose py-12 text-center">
          <p className="font-arabic text-3xl md:text-4xl text-gold leading-loose" lang="ar">
            إِنَّمَا يَخْشَى اللَّهَ مِنْ عِبَادِهِ الْعُلَمَاءُ
          </p>
          <p className="mt-3 text-foreground/90 italic" lang="am">
            "በእውነት አላህን ከባሮቹ ውስጥ የሚፈሩት አዋቂዎቹ (ዑለማኦች) ብቻ ናቸው::"
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Surah Fatir &middot; 35:28
          </p>
        </div>
      </section>

      {/* LATEST LECTURE */}
      <section className="container-prose py-20">
        <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">From the minbar</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">Latest lecture</h2>
          </div>
          <Link to="/lectures" className="btn-outline-gold text-sm py-2.5 px-5">
            All lectures →
          </Link>
        </div>

        <Link
          to="/lectures"
          className="group grid md:grid-cols-[1.2fr_1fr] gap-8 rounded-2xl border border-border hover:border-gold/60 overflow-hidden bg-card/40 transition"
        >
          <div className="relative aspect-video md:aspect-auto min-h-[280px]">
            <img
              src={lectureImg}
              alt={latestLecture.title}
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
              {latestLecture.topic} &middot; {latestLecture.duration}
            </div>
            <h3 className="font-display text-3xl mt-3 group-hover:text-gold transition">
              {latestLecture.title}
            </h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {latestLecture.description}
            </p>
            <p className="mt-6 text-xs text-muted-foreground uppercase tracking-[0.2em]">
              {latestLecture.date}
            </p>
          </div>
        </Link>
      </section>

      {/* TEACHING AREAS */}
      <section className="container-prose py-12">
        <div className="ornament-divider text-xs uppercase tracking-[0.3em]">Areas of teaching</div>
        <div className="mt-12 grid md:grid-cols-3 gap-px bg-border rounded-xl overflow-hidden border border-border">
          {[
            {
              ar: "ﺍ",
              k: "ቁርአን እና ተፍሲር",
              d: "በቀደምት ዑለማኦች ስራዎች ላይ የተመሰረተ የቁርአን ትንታኔ (ተፍሲር)።",
            },
            {
              ar: "ﺏ",
              k: "አቂዳ እና ፊቅህ",
              d: "የአህለሱና ወልጀመዓ አቂዳ እና የእለት ተእለት የአምልኮ እና የህይወት ህጎች (ፊቅህ)።",
            },
            {
              ar: "ﺝ",
              k: "ሲራ እና ተዝኪያ",
              d: "የነቢዩ (ሰ.ዐ.ወ) የህይወት ታሪክ እና የልብ ንፅህና (ተዝኪያ) ትምህርቶች።",
            },
          ].map((p) => (
            <div key={p.k} className="bg-background p-8 hover:bg-card/40 transition" lang="am">
              <span className="font-arabic text-5xl text-gold/50" lang="ar">
                {p.ar}
              </span>
              <h3 className="font-display text-2xl mt-4 text-gold">{p.k}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSE */}
      <section className="container-prose py-20">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Featured course</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">{featuredCourse.title}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {featuredCourse.description}
            </p>
            <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <span className="text-gold">{featuredCourse.level}</span>
              <span>&middot;</span>
              <span>{featuredCourse.duration}</span>
              <span>&middot;</span>
              <span>{featuredCourse.lessons} lessons</span>
            </div>
            <Link
              to="/learn/$courseId"
              params={{ courseId: featuredCourse.id }}
              className="btn-gold mt-8"
            >
              Enter the course
            </Link>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {featuredCourse.topics.map((t, i) => (
              <li
                key={t}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/40"
              >
                <span className="font-display text-xl text-gold w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WRITINGS */}
      <section className="container-prose py-20 border-t border-border">
        <div className="flex items-end justify-between gap-6 mb-12 flex-wrap">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Recent writings</p>
            <h2 className="font-display text-4xl md:text-5xl mt-3">From the desk of the ustaz</h2>
          </div>
          <Link to="/blog" className="btn-outline-gold text-sm py-2.5 px-5">
            All writings →
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
                  {p.category}
                </span>
                <div>
                  <h3 className="font-display text-2xl group-hover:text-gold transition">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2 max-w-2xl">
                    {p.excerpt}
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
