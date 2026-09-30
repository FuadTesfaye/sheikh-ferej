import { setRequestLocale } from "next-intl/server";
import { getProfile } from "@/lib/api/profile";
import Image from "next/image";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  let profile;
  try {
    profile = await getProfile(locale);
  } catch {
    profile = null;
  }
  return {
    title: "About",
    description: profile?.biography?.slice(0, 160) ?? `About ${profile?.name || "the Scholar"}`,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  
  let profile;
  try {
    profile = await getProfile(locale);
  } catch (error) {
    console.error("Failed to load profile", error);
  }

  if (!profile) return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-[#636E72]">
      <p>Failed to load profile information.</p>
    </div>
  );

  const photoUrl = profile.photo?.url;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
        <aside className="lg:w-1/3 shrink-0 space-y-8">
          <div className="w-full aspect-square rounded-[4px] overflow-hidden bg-[#FAF8F5] border border-[#E0D8CE] flex items-center justify-center relative">
            {photoUrl ? (
              <Image src={photoUrl} alt={profile.name || "Scholar"} fill className="object-cover" />
            ) : (
              <div className="text-8xl font-heading font-bold text-[#1B5E20]">
                {(profile.name || "S").charAt(0)}
              </div>
            )}
          </div>
          
          <div className="space-y-6">
            <div>
              <h1 className="font-heading text-3xl font-bold text-[#2D3436]">{profile.name}</h1>
              {profile.headline && (
                <p className="text-lg text-[#1B5E20] font-medium mt-1">{profile.headline}</p>
              )}
            </div>

            <div className="space-y-4 pt-6 border-t border-[#E0D8CE]">
              {profile.location && (
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B8860B] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span className="text-[#2D3436]">{profile.location}</span>
                </div>
              )}
              {profile.languages && profile.languages.length > 0 && (
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#B8860B] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
                  <span className="text-[#2D3436]">{profile.languages.join(", ")}</span>
                </div>
              )}
            </div>

            {profile.socials && Object.keys(profile.socials).length > 0 && (
              <div className="space-y-4 pt-6 border-t border-[#E0D8CE]">
                <h3 className="font-heading font-semibold text-[#2D3436]">Connect</h3>
                <div className="flex flex-col gap-3">
                  {Object.entries(profile.socials).map(([platform, url]) => (
                    <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#636E72] hover:text-[#1B5E20] transition-colors">
                      <span className="text-sm font-medium capitalize">{platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        <main className="lg:w-2/3">
          <h2 className="font-heading text-2xl font-bold text-[#2D3436] mb-8 pb-4 border-b border-[#E0D8CE]">Biography</h2>
          <article className="prose prose-slate max-w-none text-[#636E72] font-body prose-headings:font-heading prose-headings:text-[#2D3436] prose-a:text-[#1B5E20] leading-relaxed whitespace-pre-wrap">
            {profile.biography}
          </article>
        </main>
      </div>
    </div>
  );
}
