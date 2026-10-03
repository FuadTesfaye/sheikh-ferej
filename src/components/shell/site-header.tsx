"use client";

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import HeaderNav from './header-nav';
import LocaleSwitcher from './locale-switcher';
import { Search, Menu } from 'lucide-react';
import type { PublicProfile } from '@/lib/api/types';
import type { NavItem } from '@/lib/sections';
import MobileNav from './mobile-nav';
import { CommandSearch } from './command-search';

export interface SiteHeaderProps {
  profile: PublicProfile;
  navigation?: NavItem[];
  mainItems?: NavItem[];
  moreItems?: NavItem[];
  locale?: string;
}

export function SiteHeader({ profile, navigation, mainItems, moreItems = [], locale = 'en' }: SiteHeaderProps) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const items = navigation || mainItems || [];

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E0D8CE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-2">
          <div className="flex-1 min-w-0 me-2 sm:me-4">
            <Link href="/" className="font-heading text-base sm:text-xl font-bold text-[#2D3436] truncate block max-w-[210px] sm:max-w-none">
              {profile.name}
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
            <HeaderNav items={items} />
            
            <div className="flex items-center gap-3 sm:gap-4 border-s border-[#E0D8CE] ps-4 ms-2">
              <CommandSearch />
              <LocaleSwitcher />
            </div>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="flex md:hidden items-center gap-1 sm:gap-2 shrink-0">
            <Link href="/search" className="p-2 text-[#636E72] hover:text-[#2D3436] transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </Link>
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className="p-2 text-[#636E72] hover:text-[#2D3436] transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileNav
        open={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
        mainItems={items}
        moreItems={moreItems}
        locale={locale}
        profile={profile}
      />
    </>
  );
}

export default SiteHeader;
