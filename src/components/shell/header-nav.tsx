"use client";

import { useState, useRef } from 'react';
import { usePathname, Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import type { NavItem } from '@/lib/sections';
import { ChevronDown } from 'lucide-react';

export default function HeaderNav({ items }: { items: NavItem[] }) {
  const t = useTranslations();
  const pathname = usePathname();
  
  return (
    <nav className="flex items-center space-x-6">
      {items.map((item) => {
        const isActive = pathname.startsWith(item.href);
        const hasChildren = item.children && item.children.length > 0;
        
        if (hasChildren) {
          return (
            <DropdownNavItem 
              key={item.key} 
              item={item} 
              isActive={isActive} 
              label={t(item.labelKey as any)}
            />
          );
        }

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`font-body text-sm font-medium transition-colors ${
              isActive ? 'text-[#1B5E20]' : 'text-[#636E72] hover:text-[#2D3436]'
            }`}
          >
            {t(item.labelKey as any)}
          </Link>
        );
      })}
    </nav>
  );
}

function DropdownNavItem({ item, isActive, label }: { item: NavItem, isActive: boolean, label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const t = useTranslations();
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(false), 150);
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center font-body text-sm font-medium transition-colors ${
          isActive || isOpen ? 'text-[#1B5E20]' : 'text-[#636E72] hover:text-[#2D3436]'
        }`}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-48 rounded-md bg-[#FAF8F5] shadow-lg border border-[#E0D8CE] py-1 z-50">
          {item.children?.map((child) => {
            const isChildActive = pathname === child.href;
            return (
              <Link
                key={child.key}
                href={child.href}
                className={`block px-4 py-2 font-body text-sm transition-colors ${
                  isChildActive 
                    ? 'text-[#1B5E20] bg-black/5' 
                    : 'text-[#636E72] hover:text-[#2D3436] hover:bg-black/5'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {t(child.labelKey as any)}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
