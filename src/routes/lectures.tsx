import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { type Lecture } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";
import scholarImg from "@/assets/mic.png";
import { getTextByLang } from "@/lib/content";
import { dataService } from "@/lib/data-service";

export const Route = createFileRoute("/lectures")({
  head: () => ({
    meta: [
      { title: "Lectures — Sheikh Mohammed Ferej" },
      {
        name: "description",
        content: "Recorded lectures, Friday khutbas and short reminders by Sheikh Mohammed Ferej.",
      },
    ],
  }),
  component: Lectures,
});

const platformLink: Record<string, string> = {
  Facebook: "https://web.facebook.com/profile.php?id=100064605885257",
  TikTok: "https://www.tiktok.com/@ustazmuhammadferej0",
  Telegram: "https://t.me/ustazmuhammadferej",
  YouTube: "https://www.youtube.com/@ustazmuhammadferej",
};

function getYouTubeEmbedUrl(url: string) {
  const match = url.match(
    /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/,
  );
  return match ? `https://www.youtube.com/embed/${match[1]}?autoplay=1` : null;
}

function VideoModal({ lecture, onClose }: { lecture: Lecture; onClose: () => void }) {
  const { language, t } = useLanguage();
  const embedUrl = lecture.videoUrl ? getYouTubeEmbedUrl(lecture.videoUrl) : null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/90 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-gold/20">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/20 hover:bg-background/40 text-white transition"
          aria-label={t("common.closeVideo")}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        {embedUrl ? (
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={getTextByLang(lecture.title, language)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-center p-8">
            <h3 className="font-display text-2xl text-gold mb-4">
              {t("lectures.videoAvailableOn", { platform: lecture.platform })}
            </h3>
            <p className="text-muted-foreground mb-8">
              {t("lectures.videoHostedOn", { platform: lecture.platform })}
            </p>
            <a
              href={lecture.videoUrl || platformLink[lecture.platform]}
              target="_blank"
              rel="noreferrer"
              className="btn-gold"
            >
              {t("lectures.watchOn")} {lecture.platform}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

function Lectures() {
  const { language, t } = useLanguage();
  const [activeVideo, setActiveVideo] = useState<Lecture | null>(null);
  const [lectures, setLectures] = useState(() => dataService.getLectures());

  useEffect(() => {
    const handleStorage = () => setLectures(dataService.getLectures());
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  const [featured, ...rest] = lectures;

  return (
    <SiteLayout>
      {activeVideo && <VideoModal lecture={activeVideo} onClose={() => setActiveVideo(null)} />}

      <section className="container-prose pt-20 pb-12">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          {t("lectures.lecturesAndReminders")}
        </p>
        <h1 className="font-display text-5xl md:text-6xl mt-4 max-w-3xl">{t("lectures.hero")}</h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {t("lectures.subhero")}
        </p>
      </section>

      <section className="container-prose py-8">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 rounded-2xl overflow-hidden border border-gold/30 bg-card/40">
          <div
            className="relative aspect-video lg:aspect-auto min-h-[320px] group cursor-pointer"
            onClick={() => setActiveVideo(featured)}
          >
            <img
              src={scholarImg}
              alt={getTextByLang(featured.title, language)}
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            <button
              onClick={() => setActiveVideo(featured)}
              aria-label={t("lectures.playLecture")}
              className="absolute inset-0 grid place-items-center"
            >
              <span className="grid place-items-center h-20 w-20 rounded-full bg-gold/90 text-primary-foreground text-3xl pl-1 shadow-2xl group-hover:scale-110 transition">
                ▶
              </span>
            </button>
          </div>
          <div className="p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em]">
              <span className="text-gold">{t("home.latestLecture")}</span>
              <span className="text-muted-foreground">
                &middot; {getTextByLang(featured.topic, language)}
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl mt-4 leading-tight">
              {getTextByLang(featured.title, language)}
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {getTextByLang(featured.description, language)}
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
              <span>{featured.date}</span>
              <span>&middot;</span>
              <span className="text-gold/80">{getTextByLang(featured.duration, language)}</span>
            </div>
            <button
              onClick={() => setActiveVideo(featured)}
              className="btn-outline-gold mt-8 text-sm py-2.5 px-5 self-start"
            >
              {t("common.watchNow")}
            </button>
          </div>
        </div>
      </section>

      <section className="container-prose py-16">
        <div className="ornament-divider text-xs uppercase tracking-[0.3em]">
          {t("lectures.archiveLabel")}
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((l) => (
            <div
              key={l.id}
              onClick={() => setActiveVideo(l)}
              className="group block p-6 rounded-xl border border-border bg-card/40 hover:border-gold/60 transition cursor-pointer"
            >
              <div className="aspect-video rounded-lg bg-gradient-to-br from-gold/20 via-accent/15 to-background grid place-items-center relative overflow-hidden">
                <img
                  src={scholarImg}
                  alt={getTextByLang(l.title, language)}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity grayscale"
                />
                <span className="font-arabic text-7xl text-gold/40 group-hover:text-gold/70 transition relative z-10">
                  ﷲ
                </span>
                <span className="absolute bottom-3 right-3 grid place-items-center h-10 w-10 rounded-full bg-gold/90 text-primary-foreground pl-0.5 group-hover:scale-110 transition z-10">
                  ▶
                </span>
                <span className="absolute top-3 left-3 text-[10px] uppercase tracking-[0.2em] px-2 py-1 rounded-full bg-background/80 border border-border z-10">
                  {l.platform}
                </span>
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.2em]">
                <span className="text-gold">{getTextByLang(l.topic, language)}</span>
                <span className="text-muted-foreground">
                  &middot; {getTextByLang(l.duration, language)}
                </span>
              </div>
              <h3 className="font-display text-xl mt-2 group-hover:text-gold transition">
                {getTextByLang(l.title, language)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                {getTextByLang(l.description, language)}
              </p>
              <p className="mt-4 text-xs text-muted-foreground">{l.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-prose py-12">
        <div className="p-8 md:p-10 rounded-2xl border border-gold/30 bg-card/40 text-center">
          <p className="font-arabic text-2xl text-gold leading-loose" lang="ar">
            بَلِّغُوا عَنِّي وَلَوْ آيَةً
          </p>
          <p className="mt-3 text-foreground/90 italic">{t("lectures.bukhariQuote")}</p>
          <p className="mt-4 text-sm text-muted-foreground">{t("lectures.shareMessage")}</p>
        </div>
      </section>
    </SiteLayout>
  );
}
