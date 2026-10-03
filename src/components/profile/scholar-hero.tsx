import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface ScholarHeroProps {
  name: string;
  headline: string | null;
  biography: string | null;
  photoUrl: string | null;
  locale: string;
}

export function ScholarHero({ name, headline, biography, photoUrl, locale }: ScholarHeroProps) {
  const t = useTranslations("Navigation");

  return (
    <section className="py-10 md:py-20 border-b border-[#E0D8CE]">
      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-12 items-center">
        <div className="flex-1 space-y-5 md:space-y-6 min-w-0 w-full">
          <div>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#2D3436] leading-tight break-words">
              {name}
            </h1>
            {headline && (
              <p className="mt-2 text-lg sm:text-xl text-[#1B5E20] font-medium">{headline}</p>
            )}
          </div>
          
          {biography && (
            <p className="text-[#636E72] text-base sm:text-lg leading-relaxed max-w-2xl font-body break-words">
              {biography.slice(0, 200)}...
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-2">
            <Link 
              href="/lectures"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-[4px] bg-[#1B5E20] text-white font-medium hover:bg-[#154a19] transition-colors shadow-sm text-center w-full sm:w-auto"
            >
              Explore Lectures
            </Link>
            <Link 
              href="/library"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-[4px] bg-[#FAF8F5] border border-[#1B5E20] text-[#1B5E20] font-medium hover:bg-[#1B5E20] hover:text-white transition-colors text-center w-full sm:w-auto"
            >
              Public Library & Kitabs
            </Link>
            <Link 
              href="/about"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-3 rounded-[4px] border border-[#E0D8CE] hover:bg-[#FAF8F5] text-[#2D3436] font-medium transition-colors text-center w-full sm:w-auto"
            >
              About
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 text-xs">
            <span className="text-[#636E72] font-medium">Official Channels:</span>
            <a
              href="https://www.tiktok.com/@ustazmuhammadferej0"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111111] text-white hover:bg-black transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-.88-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V9.22a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.65z"/></svg>
              <span>TikTok (297K+)</span>
            </a>
            <a
              href="https://www.youtube.com/playlist?list=PLzRqlK40SdT6R8jYsWIxMf44Hdl8q3pt3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#CC0000] text-white hover:bg-[#b00000] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              <span>YouTube Playlist</span>
            </a>
            <a
              href="https://web.facebook.com/p/Ustaz-Muhammad-ferej-100064605885257/?_rdc=1&_rdr#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#1877F2] text-white hover:bg-[#1260c7] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <span>Facebook (330K+)</span>
            </a>
            <a
              href="https://t.me/ustazmuhammadferej"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#229ED9] text-white hover:bg-[#1b7fae] transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.832.941z"/></svg>
              <span>Telegram</span>
            </a>
          </div>
        </div>

        <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 shrink-0 rounded-[4px] overflow-hidden shadow-sm border border-[#E0D8CE] relative bg-[#FAF8F5] flex items-center justify-center">
          {photoUrl ? (
            <Image
              src={photoUrl}
              alt={name}
              fill
              className="object-cover"
              priority
            />
          ) : (
            <div className="text-6xl font-heading font-bold text-[#1B5E20]">
              {name.charAt(0)}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
