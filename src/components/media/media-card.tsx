"use client";

import { PlayCircle, Headphones, Image as ImageIcon, FileText, Download, ExternalLink } from "lucide-react";
import type { MediaItem } from "@/lib/api/media";

function getYouTubeEmbedUrl(url: string): string | null {
  if (!url) return null;
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
  return match ? `https://www.youtube-nocookie.com/embed/${match[1]}?rel=0&modestbranding=1` : null;
}

export function MediaCard({ item }: { item: MediaItem }) {
  const isYouTube = item.kind === "video" && item.url ? getYouTubeEmbedUrl(item.url) : null;
  const isTikTok = item.url?.includes("tiktok.com");
  const isFacebook = item.url?.includes("facebook.com");

  return (
    <div className="group flex flex-col bg-white rounded-md border border-[#E0D8CE] overflow-hidden hover:border-[#1B5E20] hover:shadow-sm transition-all duration-200">
      {/* Media Top Container */}
      <div className="aspect-video bg-[#2D3436] relative flex items-center justify-center overflow-hidden">
        {isYouTube ? (
          <iframe
            src={isYouTube}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        ) : item.thumbnail_url ? (
          <img
            src={item.thumbnail_url}
            alt={item.title}
            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        ) : (
          <div className="text-white/20">
            {item.kind === "video" && <PlayCircle className="w-16 h-16" />}
            {item.kind === "audio" && <Headphones className="w-16 h-16" />}
            {item.kind === "image" && <ImageIcon className="w-16 h-16" />}
            {item.kind === "document" && <FileText className="w-16 h-16" />}
          </div>
        )}

        {/* Type Badge */}
        {!isYouTube && (
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-sm text-xs font-semibold text-white flex items-center gap-1.5 uppercase tracking-wide">
            {isTikTok ? (
              <span className="text-[#00F2FE]">TikTok</span>
            ) : isFacebook ? (
              <span className="text-[#1877F2]">Facebook</span>
            ) : (
              <>
                {item.kind === "video" && <PlayCircle className="w-3.5 h-3.5 text-red-500" />}
                {item.kind === "audio" && <Headphones className="w-3.5 h-3.5 text-emerald-400" />}
                {item.kind === "image" && <ImageIcon className="w-3.5 h-3.5" />}
                {item.kind === "document" && <FileText className="w-3.5 h-3.5" />}
                <span>{item.kind === "image" ? "photo" : item.kind}</span>
              </>
            )}
          </div>
        )}
      </div>

      {/* Media Details */}
      <div className="p-5 flex flex-col flex-grow bg-[#FAF8F5]/30">
        <h3 className="font-heading font-bold text-lg text-[#2D3436] mb-2 line-clamp-2 group-hover:text-[#1B5E20] transition-colors">
          {item.title}
        </h3>
        <p className="text-sm text-[#636E72] line-clamp-2 mb-4 font-body">
          {item.description || "Scholarly resource from the official archive of Sheikh Muhammed Ferej."}
        </p>

        <div className="mt-auto pt-4 border-t border-[#E0D8CE] flex items-center justify-between">
          {item.url ? (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-bold transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 ${
                isTikTok
                  ? "text-black hover:text-[#1B5E20]"
                  : isFacebook
                  ? "text-[#1877F2] hover:text-[#1260c7]"
                  : "text-[#1B5E20] hover:text-[#B8860B]"
              }`}
            >
              {item.kind === "document" ? (
                <>
                  <Download className="w-4 h-4" /> Download PDF
                </>
              ) : item.kind === "audio" ? (
                <>
                  <Headphones className="w-4 h-4" /> Listen Audio
                </>
              ) : isTikTok ? (
                <>
                  <PlayCircle className="w-4 h-4" /> Watch on TikTok
                </>
              ) : isFacebook ? (
                <>
                  <PlayCircle className="w-4 h-4" /> Watch on Facebook
                </>
              ) : isYouTube ? (
                <>
                  <ExternalLink className="w-4 h-4" /> Watch on YouTube
                </>
              ) : (
                <>
                  <ExternalLink className="w-4 h-4" /> View Full Resolution
                </>
              )}
            </a>
          ) : (
            <span className="text-xs text-[#636E72] uppercase tracking-wider">Archived</span>
          )}

          {isYouTube && (
            <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded font-semibold">
              HD Video
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
