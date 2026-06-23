import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { courses } from "@/lib/content";
import pattern from "@/assets/pattern-bg.jpg";

export const Route = createFileRoute("/learn/$courseId")({
  head: ({ params }) => {
    const c = courses.find((x) => x.id === params.courseId);
    return {
      meta: [
        { title: c ? `${c.title} — Learning` : "Course" },
        { name: "description", content: c?.description ?? "" },
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
    <SiteLayout>
      <div className="container-prose py-32 text-center">
        <p className="font-display text-3xl">Course not found</p>
        <Link to="/learn" className="btn-outline-gold mt-6 inline-flex">
          Back to courses
        </Link>
      </div>
    </SiteLayout>
  ),
});

function CourseDetail() {
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
          <Link to="/learn" className="text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-soft">
            ← All courses
          </Link>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em]">
            <span className="px-2.5 py-1 rounded-full border border-gold/40 text-gold">
              {course.level}
            </span>
            <span className="text-muted-foreground">{course.duration}</span>
            <span className="text-muted-foreground">&middot;</span>
            <span className="text-muted-foreground">{course.lessons} lessons</span>
          </div>
          <h1 className="font-display text-5xl md:text-6xl mt-6 max-w-3xl leading-[1.05]">
            {course.title}
          </h1>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl">{course.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button className="btn-gold">Enroll now</button>
            <button className="btn-outline-gold">Preview a lesson</button>
          </div>
        </div>
      </section>

      <section className="container-prose grid lg:grid-cols-[2fr_1fr] gap-12 py-16">
        <div>
          <h2 className="font-display text-3xl">About this course</h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{course.description}</p>

          <h3 className="font-display text-2xl mt-12 text-gold">Curriculum</h3>
          <ol className="mt-6 space-y-3">
            {course.topics.map((t: string, i: number) => (
              <li
                key={t}
                className="flex items-center gap-5 p-5 rounded-lg border border-border bg-card/40 hover:border-gold/40 transition"
              >
                <span className="font-display text-2xl text-gold w-10 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1">
                  <p className="font-display text-xl">{t}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                    Module {i + 1}
                  </p>
                </div>
                <span className="text-gold text-xl">▸</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="space-y-6 lg:sticky lg:top-28 self-start">
          <div className="p-6 rounded-xl border border-gold/30 bg-card/60">
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Instructor</p>
            <p className="font-display text-2xl mt-2">Ustaz Muhammad Ferej</p>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Ethiopian Islamic scholar with two decades of teaching in the sacred sciences.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40 space-y-4 text-sm">
            <Row label="Level" value={course.level} />
            <Row label="Duration" value={course.duration} />
            <Row label="Lessons" value={String(course.lessons)} />
            <Row label="Language" value="Amharic & Arabic" />
            <Row label="Certificate" value="Yes" />
          </div>

          <div className="p-6 rounded-xl border border-border bg-card/40">
            <p className="font-arabic text-xl text-gold leading-loose">
              مَن سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا
            </p>
            <p className="text-sm italic text-muted-foreground mt-2">
              "Whoever travels a path seeking knowledge, Allah will make easy for him a path to
              Paradise." — Muslim
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
