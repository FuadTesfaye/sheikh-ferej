import { getLectures } from "@/lib/api/lectures";
import { getCategories } from "@/lib/api/taxonomy";
import { setRequestLocale } from "next-intl/server";
import { FilterBar } from "@/components/ui/filter-bar";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Clock, Calendar, Video, AudioLines } from "lucide-react";
import { formatDate, formatDuration } from "@/lib/utils";
import type { PublicLecture } from "@/lib/api/types";

interface LecturesPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function LecturesPage({ params, searchParams }: LecturesPageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const resolvedSearchParams = await searchParams;
  const categorySlug = typeof resolvedSearchParams.category === "string" ? resolvedSearchParams.category : undefined;
  const tagSlug = typeof resolvedSearchParams.tag === "string" ? resolvedSearchParams.tag : undefined;
  const sort = typeof resolvedSearchParams.sort === "string" ? resolvedSearchParams.sort : undefined;
  const cursor = typeof resolvedSearchParams.cursor === "string" ? resolvedSearchParams.cursor : undefined;

  let lecturesResponse = { data: [] as PublicLecture[], has_more: false, next_cursor: null as string | null };
  let categories = [] as any[];

  try {
    const [lecRes, catRes] = await Promise.all([
      getLectures({ 
        locale, 
        category: categorySlug ? [categorySlug] : undefined,
        tag: tagSlug ? [tagSlug] : undefined,
        sort,
        cursor 
      }),
      getCategories()
    ]);
    lecturesResponse = lecRes;
    categories = catRes.data || [];
  } catch (err) {
    console.error("Failed to load lectures:", err);
  }

  const lectures = lecturesResponse.data || [];

  return (
    <div className="min-h-screen bg-[#FAF8F5] py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="mb-12 space-y-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-[#2D3436]">
            Lectures
          </h1>
          <p className="text-lg text-[#636E72] max-w-2xl font-body">
            Explore the comprehensive collection of sermons, lessons, and scholarly discourses.
          </p>
        </div>

        <div className="mb-8">
          <FilterBar categories={categories} currentCategory={categorySlug} />
        </div>

        {lectures.length === 0 ? (
          <div className="text-center py-20 bg-white border border-[#E0D8CE] rounded-md">
            <h3 className="font-heading text-xl text-[#2D3436] mb-2">No lectures found</h3>
            <p className="text-[#636E72]">Try adjusting your filters to find what you're looking for.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lectures.map((lecture: PublicLecture) => (
              <Link key={lecture.id} href={`/lectures/${lecture.slug}`} className="group flex flex-col h-full bg-white border border-[#E0D8CE] rounded-md overflow-hidden hover:border-[#1B5E20] hover:shadow-sm transition-all">
                <div className="relative aspect-video bg-[#E0D8CE] overflow-hidden">
                  {lecture.cover?.url ? (
                    <Image
                      src={lecture.cover.url}
                      alt={lecture.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/50 flex items-center justify-center text-[#1B5E20]">
                        {lecture.media?.video ? <Video className="w-8 h-8" /> : <AudioLines className="w-8 h-8" />}
                      </div>
                    </div>
                  )}
                  {lecture.duration_seconds && (
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDuration(lecture.duration_seconds)}
                    </div>
                  )}
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    {lecture.categories && lecture.categories.length > 0 && (
                      <span className="text-xs font-semibold text-[#1B5E20] uppercase tracking-wider capitalize">
                        {lecture.categories[0]}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="font-heading text-xl font-bold text-[#2D3436] mb-3 group-hover:text-[#1B5E20] transition-colors line-clamp-2">
                    {lecture.title}
                  </h3>
                  
                  {lecture.summary && (
                    <p className="text-sm text-[#636E72] line-clamp-3 mb-4 font-body">
                      {lecture.summary}
                    </p>
                  )}
                  
                  <div className="mt-auto pt-4 border-t border-[#FAF8F5] flex items-center text-sm text-[#636E72]">
                    <Calendar className="w-4 h-4 mr-2" />
                    {lecture.published_at ? formatDate(lecture.published_at) : 'Date unavailable'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        
        {lecturesResponse.has_more && (
          <div className="mt-12 flex justify-center">
            <Link 
              href={`?cursor=${lecturesResponse.next_cursor}`}
              className="px-6 py-2.5 bg-[#FAF8F5] border border-[#E0D8CE] text-[#2D3436] font-medium rounded-md hover:bg-[#E0D8CE] transition-colors"
            >
              Load More
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
