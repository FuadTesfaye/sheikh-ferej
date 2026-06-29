import type { ContentBlock } from "@/lib/content";
import { getTextByLang } from "@/lib/content";
import { useLanguage } from "@/hooks/use-language";

function HadithBlock({
  arabic,
  amharic,
  source,
}: {
  arabic: string;
  amharic: string;
  source?: string;
}) {
  return (
    <blockquote className="relative rounded-2xl border border-gold/30 bg-card/50 overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold via-gold/60 to-gold/20" />
      <div className="p-6 md:p-8 space-y-5">
        <p
          className="font-arabic text-2xl md:text-3xl leading-[2] text-foreground text-right"
          lang="ar"
          dir="rtl"
        >
          {arabic}
        </p>
        <div className="ornament-divider opacity-60" />
        <p className="font-amharic text-base md:text-lg leading-[1.9] text-foreground/90" lang="am">
          {amharic}
        </p>
        {source && (
          <p className="text-xs uppercase tracking-[0.2em] text-gold/70 pt-1">{source}</p>
        )}
      </div>
    </blockquote>
  );
}

function DuaBlock({
  arabic,
  amharic,
  label,
}: {
  arabic: string;
  amharic: string;
  label?: string;
}) {
  return (
    <div className="rounded-2xl border border-gold/25 bg-gradient-to-br from-gold/5 via-card/40 to-background p-6 md:p-8 space-y-5">
      {label && (
        <p className="text-xs uppercase tracking-[0.3em] text-gold text-center">{label}</p>
      )}
      <p
        className="font-arabic text-xl md:text-2xl leading-[2.2] text-foreground text-center"
        lang="ar"
        dir="rtl"
      >
        {arabic}
      </p>
      <div className="flex justify-center">
        <span className="text-gold text-lg">﷽</span>
      </div>
      <p className="font-amharic text-base md:text-lg leading-[1.9] text-foreground/90 text-center" lang="am">
        {amharic}
      </p>
    </div>
  );
}

export function PostContent({ blocks }: { blocks: ContentBlock[] }) {
  const { language } = useLanguage();

  return (
    <div className="space-y-8">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={i} className="text-lg leading-[1.85] text-foreground/90">
                {getTextByLang(block.text, language)}
              </p>
            );
          case "heading":
            return (
              <h2
                key={i}
                className="font-display text-2xl md:text-3xl text-gold pt-4"
              >
                {getTextByLang(block.text, language)}
              </h2>
            );
          case "hadith":
            return (
              <HadithBlock
                key={i}
                arabic={block.arabic}
                amharic={block.amharic}
                source={
                  block.source ? getTextByLang(block.source, language) : undefined
                }
              />
            );
          case "dua":
            return (
              <DuaBlock
                key={i}
                arabic={block.arabic}
                amharic={block.amharic}
                label={block.label ? getTextByLang(block.label, language) : undefined}
              />
            );
          case "divider":
            return <div key={i} className="ornament-divider my-4" />;
          default:
            return null;
        }
      })}
    </div>
  );
}
