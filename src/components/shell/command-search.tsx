'use client';
import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { Search, FileText, Book, Video, Headphones, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export function CommandSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const handleSelect = (url: string) => {
     setOpen(false);
     router.push(url);
  };

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="flex items-center text-secondary hover:text-charcoal transition-colors px-3 py-1.5 rounded-md border border-border/50 bg-ivory/30 text-sm"
      >
        <Search className="w-4 h-4 mr-2" />
        <span className="hidden sm:inline-block mr-4">Search content...</span>
        <kbd className="hidden sm:inline-block font-sans text-xs font-semibold px-1.5 py-0.5 bg-border/50 rounded-sm">
          ⌘K
        </kbd>
      </button>

      {open && (
         <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] sm:pt-[20vh] px-4">
            <div className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-border overflow-hidden">
                <Command className="w-full" label="Command Menu" shouldFilter={false}>
                   <div className="flex items-center border-b border-border px-4 py-3">
                     <Search className="w-5 h-5 text-secondary shrink-0" />
                     <Command.Input 
                       value={query}
                       onValueChange={setQuery}
                       placeholder="Search the scholarly platform..." 
                       className="flex-1 bg-transparent border-none focus:outline-none focus:ring-0 text-lg px-4 font-body text-charcoal placeholder-secondary/70" 
                     />
                     <button onClick={() => setOpen(false)} className="text-secondary hover:text-charcoal p-1 rounded-md hover:bg-ivory transition-colors">
                       <X className="w-5 h-5" />
                     </button>
                   </div>
                   
                   <Command.List className="max-h-[60vh] overflow-y-auto p-2 overscroll-contain">
                      <Command.Empty className="py-10 text-center text-secondary font-body">
                         {query ? "No results found for your search." : "Type a query to search across the platform."}
                      </Command.Empty>

                      {/* Mocked results for UI. In reality, wire this to a debounced API call */}
                      {query.length > 2 && (
                         <>
                            <Command.Group heading="Library" className="px-2 py-3 text-xs font-bold text-secondary uppercase tracking-wider">
                               <Command.Item onSelect={() => handleSelect('/library/sample')} className="flex items-center px-3 py-3 rounded-md hover:bg-ivory cursor-pointer aria-selected:bg-ivory aria-selected:text-accent text-charcoal font-medium font-body mb-1">
                                 <Book className="w-4 h-4 mr-3 text-secondary" />
                                 Usul al-Fiqh Mastery
                               </Command.Item>
                            </Command.Group>
                            
                            <Command.Group heading="Lectures" className="px-2 py-3 text-xs font-bold text-secondary uppercase tracking-wider">
                               <Command.Item onSelect={() => handleSelect('/media')} className="flex items-center px-3 py-3 rounded-md hover:bg-ivory cursor-pointer aria-selected:bg-ivory aria-selected:text-accent text-charcoal font-medium font-body mb-1">
                                 <Video className="w-4 h-4 mr-3 text-secondary" />
                                 Tafsir Surah Al-Baqarah (Part 4)
                               </Command.Item>
                               <Command.Item onSelect={() => handleSelect('/media')} className="flex items-center px-3 py-3 rounded-md hover:bg-ivory cursor-pointer aria-selected:bg-ivory aria-selected:text-accent text-charcoal font-medium font-body">
                                 <Headphones className="w-4 h-4 mr-3 text-secondary" />
                                 Friday Khutbah: The Rights of Neighbors
                               </Command.Item>
                            </Command.Group>
                         </>
                      )}
                   </Command.List>
                   
                   <div className="border-t border-border bg-ivory px-4 py-3 flex items-center justify-between text-xs text-secondary font-medium">
                      <div className="flex items-center">
                         Use <kbd className="mx-1 px-1.5 py-0.5 bg-white border border-border rounded shadow-sm">↑</kbd> <kbd className="mx-1 px-1.5 py-0.5 bg-white border border-border rounded shadow-sm">↓</kbd> to navigate
                      </div>
                      <div className="flex items-center">
                         <kbd className="mx-1 px-1.5 py-0.5 bg-white border border-border rounded shadow-sm">Enter</kbd> to select
                      </div>
                   </div>
                </Command>
            </div>
         </div>
      )}
    </>
  );
}
