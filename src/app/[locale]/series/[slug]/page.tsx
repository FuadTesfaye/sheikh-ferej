import { getSeriesDetail } from "@/lib/api/series";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { ArrowLeft, Clock, Layers, PlayCircle } from "lucide-react";
import { formatDuration } from "@/lib/utils";
import type { PublicSeries, PublicLecture } from "@/lib/api/types";
import { Metadata } from "next";

interface SeriesDetailPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: SeriesDetailPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  try {
    const series = await getSeriesDetail(slug, locale);
    return {
      title: `${series.title} - Sheikh Muhammed Hamdu`,
      description: series.description || `Study the ${series.title} series`,
    };
  } catch (error) {
    return { title: "Series Not Found" };
  }
}

export default async function SeriesDetailPage({ params }: SeriesDetailPageProps) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  let series: PublicSeries;
  try {
    series = await getSeriesDetail(slug, locale);
  } catch {
    return (
      <div className="min-h-screen bg-[#FAF8F5] py-20 text-center">
        <h1 className="text-2xl font-bold font-heading mb-4 text-[#2D3436]">Series Not Found</h1>
        <Link href="/series" className="text-[#1B5E20] hover:underline font-medium">← Back to all series</Link>
      </div>
    );
  }

  const lectures = (series.lectures || []).sort((a: PublicLecture, b: PublicLecture) => 
    (a.series?.position || 0) - (b.series?.position || 0)
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Link 
          href="/series" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#636E72] hover:text-[#1B5E20] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          All Series
        </Link>

        <div className="bg-white border border-[#E0D8CE] rounded-md overflow-hidden mb-12">
          {series.cover?.url && (
            <div className="w-full h-48 md:h-64 relative bg-[#E0D8CE]">
              <Image
                src={series.cover.url}
                alt={series.title}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-6 md:p-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#FAF8F5] border border-[#E0D8CE] text-[#B8860B] rounded-full text-xs font-medium mb-4">
              <Layers className="w-3.5 h-3.5" />
              Series • {series.lecture_count || lectures.length} Lessons
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-[#2D3436] mb-4">
              {series.title}
            </h1>
            
            {series.description && (
              <p className="text-lg text-[#636E72] leading-relaxed font-body">
                {series.description}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="font-heading text-2xl font-bold text-[#2D3436]">Course Material</h2>
          
          {lectures.length === 0 ? (
            <div className="p-8 text-center bg-white border border-[#E0D8CE] rounded-md text-[#636E72]">
              No lessons have been added to this series yet.
            </div>
          ) : (
            <div className="bg-white border border-[#E0D8CE] rounded-md divide-y divide-[#E0D8CE]">
              {lectures.map((lecture: PublicLecture, index: number) => {
                const position = lecture.series?.position || index + 1;
                const formattedNumber = position.toString().padStart(2, '0');
                
                return (
                  <Link 
                    key={lecture.id} 
                    href={`/lectures/${lecture.slug}`}
                    className="flex flex-col sm:flex-row items-start sm:items-center p-4 md:p-6 hover:bg-[#FAF8F5] transition-colors group"
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#E0D8CE] flex items-center justify-center text-[#2D3436] font-heading font-bold text-sm group-hover:bg-[#1B5E20] group-hover:text-white group-hover:border-[#1B5E20] transition-colors">
                        {formattedNumber}
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="font-heading text-lg font-semibold text-[#2D3436] group-hover:text-[#1B5E20] transition-colors">
                          {lecture.title}
                        </h3>
                        {lecture.summary && (
                          <p className="text-sm text-[#636E72] line-clamp-1 mt-1">
                            {lecture.summary}
                          </p>
                        )}
                      </div>

                      <div className="flex-shrink-0 flex items-center gap-6 text-[#636E72]">
                        {lecture.duration_seconds && (
                          <div className="hidden sm:flex items-center gap-1.5 text-sm">
                            <Clock className="w-4 h-4" />
                            {formatDuration(lecture.duration_seconds)}
                          </div>
                        )}
                        <PlayCircle className="w-8 h-8 text-[#E0D8CE] group-hover:text-[#1B5E20] transition-colors" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
