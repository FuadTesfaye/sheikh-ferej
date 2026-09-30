import { setRequestLocale } from "next-intl/server";
import { journeyData } from "@/data/journey";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return {
    title: "Educational Journey",
    description: "A timeline of educational and professional milestones.",
  };
}

export default async function JourneyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="text-center mb-16 space-y-4">
        <h1 className="font-heading text-4xl font-bold text-[#2D3436]">Educational Journey</h1>
        <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
          A timeline of milestones, studies, and scholarly contributions.
        </p>
      </div>

      <div className="relative border-l-2 border-[#E0D8CE] ml-4 md:ml-8 space-y-12">
        {journeyData.map((entry, idx) => {
          const isCurrent = entry.type === "current";
          return (
            <div key={idx} className="relative pl-8 md:pl-12">
              <span className={`absolute -left-[9px] top-1.5 flex h-4 w-4 rounded-full ${isCurrent ? 'bg-[#1B5E20]' : 'bg-[#FAF8F5] border-2 border-[#1B5E20]'}`}>
              </span>

              <div className="flex flex-col space-y-2">
                <span className="font-heading text-2xl font-bold text-[#1B5E20]">
                  {entry.year}
                </span>
                
                <div className="bg-white border border-[#E0D8CE] p-6 rounded-[4px] shadow-sm">
                  <h3 className="text-xl font-heading font-semibold text-[#2D3436]">
                    {entry.title}
                  </h3>
                  
                  {entry.institution && (
                    <p className="text-[#B8860B] font-medium text-sm mt-1">
                      {entry.institution}
                    </p>
                  )}
                  
                  <p className="text-[#636E72] mt-3 leading-relaxed">
                    {entry.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
