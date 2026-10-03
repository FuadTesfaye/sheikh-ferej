"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Check } from "lucide-react";

interface LectureTranscriptProps {
  transcript: string | null;
  title: string;
}

export function LectureTranscript({ transcript, title }: LectureTranscriptProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!transcript) {
    return null;
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(transcript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy transcript", err);
    }
  };

  return (
    <div className="mt-8 border-t border-[#E0D8CE] pt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-start group"
      >
        <span className="font-heading text-lg sm:text-xl font-semibold text-[#2D3436] group-hover:text-[#1B5E20] transition-colors">
          Transcript
        </span>
        <div className="flex items-center gap-2 text-[#636E72] group-hover:text-[#1B5E20] transition-colors">
          <span className="text-xs sm:text-sm font-medium">
            {isOpen ? "Hide Transcript" : "Show Transcript"}
          </span>
          {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {isOpen && (
        <div className="mt-6 animate-in slide-in-from-top-2 fade-in duration-200">
          <div className="flex justify-end mb-4">
            <button
              onClick={handleCopy}
              className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#636E72] bg-[#FAF8F5] border border-[#E0D8CE] rounded-md hover:bg-[#E0D8CE] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#1B5E20]" />
                  <span>Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy text</span>
                </>
              )}
            </button>
          </div>
          <div className="prose prose-[#2D3436] max-w-none bg-[#FAF8F5] p-4 sm:p-6 md:p-8 rounded-md border border-[#E0D8CE]">
            <div 
              className="text-[#2D3436] leading-relaxed font-body whitespace-pre-wrap break-words text-sm sm:text-base"
              dangerouslySetInnerHTML={{ __html: transcript }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
