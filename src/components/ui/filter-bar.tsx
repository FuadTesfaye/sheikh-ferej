"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { cn } from "@/lib/utils";
import type { PublicCategory } from "@/lib/api/types";

interface FilterBarProps {
  categories: PublicCategory[];
  currentCategory?: string;
}

export function FilterBar({ categories, currentCategory }: FilterBarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryClick = (slug: string) => {
    if (currentCategory === slug) {
      router.push(`${pathname}?${createQueryString("category", "")}`);
    } else {
      router.push(`${pathname}?${createQueryString("category", slug)}`);
    }
  };

  return (
    <div className="flex w-full items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
      <button
        onClick={() => router.push(`${pathname}?${createQueryString("category", "")}`)}
        className={cn(
          "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors border",
          !currentCategory
            ? "bg-[#1B5E20] text-white border-[#1B5E20]"
            : "bg-[#FAF8F5] text-[#2D3436] border-[#E0D8CE] hover:bg-[#E0D8CE]"
        )}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => handleCategoryClick(category.slug)}
          className={cn(
            "whitespace-nowrap rounded-full px-4 py-1.5 text-sm font-medium transition-colors border",
            currentCategory === category.slug
              ? "bg-[#1B5E20] text-white border-[#1B5E20]"
              : "bg-[#FAF8F5] text-[#2D3436] border-[#E0D8CE] hover:bg-[#E0D8CE]"
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
