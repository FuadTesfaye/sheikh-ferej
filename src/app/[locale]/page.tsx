import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getProfile } from "@/lib/api/profile";
import { getLectures } from "@/lib/api/lectures";
import { getArticles } from "@/lib/api/articles";
import { getEvents } from "@/lib/api/events";
import { ScholarHero } from "@/components/profile/scholar-hero";
import { formatDuration, formatDate } from "@/lib/utils";
import type { PublicLecture, PublicArticle, PublicEvent } from "@/lib/api/types";

function LectureCard({ lecture }: { lecture: PublicLecture }) {
  const coverUrl = lecture.cover?.url;
  return (
    <Link href={`/lectures/${lecture.slug}`} className="block group">
      <div className="border border-[#E0D8CE] rounded-[4px] overflow-hidden bg-white hover:shadow-sm transition-shadow">
        <div className="aspect-video bg-[#FAF8F5] relative flex items-center justify-center">
          {coverUrl ? (
            <img src={coverUrl} alt={lecture.title} className="w-full h-full object-cover" />
          ) : (
            <div className="text-[#1B5E20] opacity-50">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
            </div>
          )}
        </div>
        <div className="p-4 space-y-2">
          <div className="flex gap-2">
            {lecture.categories && lecture.categories.length > 0 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#FAF8F5] text-[#1B5E20] border border-[#E0D8CE] font-medium capitalize">
                {lecture.categories[0]}
              </span>
            )}
            {lecture.duration_seconds && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-[#FAF8F5] text-[#636E72] border border-[#E0D8CE]">
                {formatDuration(lecture.duration_seconds)}
              </span>
            )}
          </div>
          <h3 className="font-heading font-semibold text-[#2D3436] group-hover:text-[#1B5E20] transition-colors line-clamp-2">
            {lecture.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

function ArticleCard({ article }: { article: PublicArticle }) {
  return (
    <Link href={`/articles/${article.slug}`} className="block group h-full">
      <div className="border border-[#E0D8CE] rounded-[4px] overflow-hidden bg-white p-4 space-y-3 hover:shadow-sm transition-shadow h-full flex flex-col">
        <h3 className="font-heading font-semibold text-[#2D3436] group-hover:text-[#1B5E20] transition-colors line-clamp-2">
          {article.title}
        </h3>
        <p className="text-[#636E72] text-sm line-clamp-3 flex-1">{article.summary}</p>
        <div className="text-xs text-[#B8860B] font-medium pt-2 border-t border-[#E0D8CE]">
          {article.reading_minutes ? `${article.reading_minutes} min read` : "Read article"}
        </div>
      </div>
    </Link>
  );
}

function EventCard({ event }: { event: PublicEvent }) {
  const date = new Date(event.starts_at);
  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <div className="border border-[#E0D8CE] rounded-[4px] overflow-hidden bg-white flex hover:shadow-sm transition-shadow">
        <div className="bg-[#FAF8F5] border-r border-[#E0D8CE] px-4 py-4 flex flex-col items-center justify-center min-w-[80px]">
          <span className="text-[#1B5E20] font-bold text-xl">{date.getDate()}</span>
          <span className="text-[#636E72] text-xs uppercase tracking-wider">{date.toLocaleString('default', { month: 'short' })}</span>
        </div>
        <div className="p-4 space-y-1">
          <h3 className="font-heading font-semibold text-[#2D3436] group-hover:text-[#1B5E20] transition-colors line-clamp-1">
            {event.title}
          </h3>
          {event.venue_name && (
            <p className="text-[#636E72] text-sm line-clamp-1">{event.venue_name}</p>
          )}
          <p className="text-[#636E72] text-xs">{formatDate(event.starts_at)}</p>
        </div>
      </div>
    </Link>
  );
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  let profile = null;
  let latestLectures: PublicLecture[] = [];
  let latestArticles: PublicArticle[] = [];
  let upcomingEvents: PublicEvent[] = [];

  try {
    profile = await getProfile(locale);
    const sections = profile.sections;

    if (sections.lectures) {
      const res = await getLectures({ limit: "6", locale });
      latestLectures = res?.data || [];
    }
    if (sections.articles) {
      const res = await getArticles({ limit: "3", locale });
      latestArticles = res?.data || [];
    }
    if (sections.events) {
      const res = await getEvents({ limit: "3", locale });
      upcomingEvents = res?.data || [];
    }
  } catch (error) {
    console.error("Failed to fetch homepage data", error);
  }

  if (!profile) {
    profile = {
      object: "profile" as const,
      id: "fallback",
      name: "Sheikh Muhammed Hamdu",
      headline: "Islamic Scholar & Teacher",
      biography: "Sheikh Muhammed Hamdu is an Islamic scholar and teacher dedicated to authentic knowledge.",
      languages: ["ar", "am", "en"],
      locale,
      direction: "ltr" as const,
      photo: null,
      sections: { lectures: true, articles: true, fatwas: true, courses: true, library: true, events: true, questions: true },
      socials: {},
      updated_at: new Date().toISOString(),
    };
  }

  const featuredLecture = latestLectures[0];
  const otherLectures = latestLectures.slice(1, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      <ScholarHero 
        name={profile.name}
        headline={profile.headline}
        biography={profile.biography}
        photoUrl={profile.photo?.url ?? null}
        locale={locale}
      />

      {featuredLecture && (
        <section className="py-12 border-b border-[#E0D8CE]">
          <h2 className="font-heading text-2xl font-bold text-[#2D3436] mb-6">Featured Lecture</h2>
          <div className="border border-[#E0D8CE] rounded-[4px] overflow-hidden bg-white shadow-sm flex flex-col md:flex-row group relative">
            <Link href={`/lectures/${featuredLecture.slug}`} className="absolute inset-0 z-10">
              <span className="sr-only">View Lecture</span>
            </Link>
            <div className="md:w-1/2 aspect-video bg-[#FAF8F5] relative flex items-center justify-center">
              {featuredLecture.cover?.url ? (
                <img src={featuredLecture.cover.url} alt={featuredLecture.title} className="w-full h-full object-cover" />
              ) : (
                <div className="w-16 h-16 rounded-full bg-[#1B5E20] flex items-center justify-center text-white pl-1 shadow-md">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                </div>
              )}
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center md:w-1/2 space-y-4">
              <div className="flex gap-2">
                {featuredLecture.categories && featuredLecture.categories.length > 0 && (
                  <span className="px-3 py-1 text-sm rounded-full bg-[#FAF8F5] text-[#1B5E20] border border-[#E0D8CE] font-medium capitalize">
                    {featuredLecture.categories[0]}
                  </span>
                )}
                {featuredLecture.duration_seconds && (
                  <span className="px-3 py-1 text-sm rounded-full bg-[#FAF8F5] text-[#636E72] border border-[#E0D8CE]">
                    {formatDuration(featuredLecture.duration_seconds)}
                  </span>
                )}
              </div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#2D3436] group-hover:text-[#1B5E20] transition-colors">
                {featuredLecture.title}
              </h3>
              {featuredLecture.summary && (
                <p className="text-[#636E72] line-clamp-2 text-lg">
                  {featuredLecture.summary}
                </p>
              )}
            </div>
          </div>
        </section>
      )}

      <div className="py-12 space-y-16">
        {otherLectures.length > 0 && (
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-heading text-2xl font-bold text-[#2D3436]">Latest Lectures</h2>
              <Link href="/lectures" className="text-[#1B5E20] hover:text-[#B8860B] font-medium transition-colors">
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherLectures.map((lecture) => (
                <LectureCard key={lecture.id} lecture={lecture} />
              ))}
            </div>
          </section>
        )}

        {latestArticles.length > 0 && (
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-heading text-2xl font-bold text-[#2D3436]">Latest Articles</h2>
              <Link href="/articles" className="text-[#1B5E20] hover:text-[#B8860B] font-medium transition-colors">
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        )}

        {upcomingEvents.length > 0 && (
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-heading text-2xl font-bold text-[#2D3436]">Upcoming Events</h2>
              <Link href="/events" className="text-[#1B5E20] hover:text-[#B8860B] font-medium transition-colors">
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
