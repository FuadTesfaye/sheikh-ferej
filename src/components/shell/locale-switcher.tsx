"use client";

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import { localeLabels } from '@/i18n/config';
import { useState, useRef, useEffect } from 'react';

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLabel = localeLabels ? localeLabels[locale as keyof typeof localeLabels] : locale;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4" />
        <span className="font-arabic">{currentLabel}</span>
      </button>

      {isOpen && localeLabels && (
        <div className="absolute end-0 mt-2 w-40 rounded-md bg-[#FAF8F5] shadow-lg border border-[#E0D8CE] py-1 z-50">
          {Object.entries(localeLabels).map(([key, label]) => (
            <button
              key={key}
              onClick={() => handleLocaleChange(key)}
              className={`w-full text-start px-4 py-2 text-sm font-body transition-colors ${
                locale === key 
                  ? 'text-[#1B5E20] bg-black/5' 
                  : 'text-[#636E72] hover:text-[#2D3436] hover:bg-black/5'
              }`}
            >
              {label as string}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
