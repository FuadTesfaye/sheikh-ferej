'use client';
import { useState, useEffect, useMemo } from 'react';
import { Command } from 'cmdk';
import { 
  Search, FileText, Book, Video, Headphones, X, Compass, 
  Award, Calendar, MessageSquare, Mail, Layers, GraduationCap, CheckCircle
} from 'lucide-react';
import { useRouter } from '@/i18n/navigation';

interface QuickLink {
  title: string;
  href: string;
  category: string;
  icon: typeof Compass;
}

const QUICK_LINKS: QuickLink[] = [
  { title: "Scholar Biography & Profile", href: "/about", category: "Scholar", icon: Compass },
  { title: "Educational Journey & Timeline", href: "/journey", category: "Scholar", icon: GraduationCap },
  { title: "Academic Qualifications & Traditional Ijazat", href: "/qualifications", category: "Scholar", icon: Award },
  { title: "Lectures & Sermons Archive", href: "/lectures", category: "Knowledge", icon: Video },
  { title: "Kitab At-Tawheed Series (32 Chapters)", href: "/series/kitab-at-tawheed", category: "Knowledge", icon: Layers },
  { title: "Scholarly Articles & Hadith Studies", href: "/articles", category: "Knowledge", icon: FileText },
  { title: "Fatwas & Sharia Rulings", href: "/fatwas", category: "Knowledge", icon: CheckCircle },
  { title: "Structured Academic Courses", href: "/courses", category: "Knowledge", icon: Book },
  { title: "Public Kitab & Documents (PDFs)", href: "/library", category: "Resources", icon: Book },
  { title: "Conferences & Events Schedule", href: "/events", category: "Resources", icon: Calendar },
  { title: "Unified Media Gallery (Audio, Photos, TikTok)", href: "/media", category: "Resources", icon: Headphones },
  { title: "Ask the Sheikh (Question Submission)", href: "/ask", category: "Engagement", icon: MessageSquare },
  { title: "Scholarly Office & Contact", href: "/contact", category: "Engagement", icon: Mail },
];

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (url: string) => {
    setOpen(false);
    setQuery('');
    router.push(url);
  };

  const filteredLinks = useMemo(() => {
    if (!query.trim()) return QUICK_LINKS;
    const q = query.toLowerCase();
    return QUICK_LINKS.filter(
      (item) => item.title.toLowerCase().includes(q) || item.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="flex items-center text-[#636E72] hover:text-[#2D3436] transition-colors px-3 py-1.5 rounded-md border border-[#E0D8CE] bg-white/60 text-sm shadow-xs"
        aria-label="Search content"
      >
        <Search className="w-4 h-4 mr-2 text-[#1B5E20]" />
        <span className="hidden sm:inline-block mr-4 font-body">Quick search...</span>
        <kbd className="hidden sm:inline-block font-sans text-xs font-semibold px-1.5 py-0.5 bg-[#FAF8F5] border border-[#E0D8CE] rounded-sm text-[#636E72]">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] sm:pt-[15vh] px-4">
          <div className="fixed inset-0 bg-[#2D3436]/50 backdrop-blur-xs" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-[#E0D8CE] overflow-hidden">
            <Command className="w-full" label="Command Menu" shouldFilter={false}>
              <div className="flex items-center border-b border-[#E0D8CE] px-4 py-3 bg-[#FAF8F5]">
                <Search className="w-5 h-5 text-[#1B5E20] shrink-0" />
                <Command.Input 
                  value={query}
                  onValueChange={setQuery}
                  placeholder="Search pages, lectures, kitabs, rulings..." 
                  className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-base px-3 font-body text-[#2D3436] placeholder-[#636E72]/60" 
                  autoFocus
                />
                <button 
                  onClick={() => setOpen(false)} 
                  className="text-[#636E72] hover:text-[#2D3436] p-1.5 rounded-md hover:bg-black/5 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <Command.List className="max-h-[60vh] overflow-y-auto p-2 overscroll-contain">
                {query.trim().length > 0 && (
                  <Command.Item
                    onSelect={() => handleSelect(`/search?q=${encodeURIComponent(query.trim())}`)}
                    className="flex items-center px-3 py-2.5 rounded-md bg-emerald-50/70 hover:bg-emerald-100/70 cursor-pointer text-[#1B5E20] font-semibold font-body text-sm mb-2"
                  >
                    <Search className="w-4 h-4 mr-3 shrink-0" />
                    <span>Search all portal archives for &quot;{query.trim()}&quot;</span>
                  </Command.Item>
                )}

                {filteredLinks.length > 0 ? (
                  <Command.Group heading={query ? "Matching Pages" : "Quick Navigation"} className="px-2 py-2 text-xs font-bold text-[#636E72] uppercase tracking-wider">
                    {filteredLinks.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Command.Item
                          key={item.href}
                          onSelect={() => handleSelect(item.href)}
                          className="flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-[#FAF8F5] cursor-pointer text-[#2D3436] font-medium font-body text-sm transition-colors mb-0.5 group"
                        >
                          <div className="flex items-center">
                            <Icon className="w-4 h-4 mr-3 text-[#1B5E20] shrink-0" />
                            <span className="group-hover:text-[#1B5E20] transition-colors">{item.title}</span>
                          </div>
                          <span className="text-xs text-[#636E72] bg-[#FAF8F5] group-hover:bg-white border border-[#E0D8CE] px-2 py-0.5 rounded font-mono">
                            {item.category}
                          </span>
                        </Command.Item>
                      );
                    })}
                  </Command.Group>
                ) : (
                  <Command.Empty className="py-12 text-center text-[#636E72] font-body text-sm">
                    No matching direct pages found. Press enter to search all content.
                  </Command.Empty>
                )}
              </Command.List>
              
              <div className="border-t border-[#E0D8CE] bg-[#FAF8F5] px-4 py-2.5 flex items-center justify-between text-xs text-[#636E72] font-medium">
                <div className="flex items-center gap-2">
                  <span>Press <kbd className="px-1.5 py-0.5 bg-white border border-[#E0D8CE] rounded text-[10px]">Enter</kbd> to open</span>
                </div>
                <div>
                  <kbd className="px-1.5 py-0.5 bg-white border border-[#E0D8CE] rounded text-[10px]">Esc</kbd> to close
                </div>
              </div>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
