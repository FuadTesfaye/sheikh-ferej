import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  label: string;
  title: string;
  description?: string;
  className?: string;
  children?: ReactNode;
};

export function PageHero({ label, title, description, className, children }: PageHeroProps) {
  return (
    <section className={cn("container-prose page-hero", className)}>
      <p className="section-label">{label}</p>
      <h1 className="page-title mt-3 sm:mt-4">{title}</h1>
      {description && <p className="page-subtitle mt-4 sm:mt-6">{description}</p>}
      {children}
    </section>
  );
}

type SectionHeaderProps = {
  label?: string;
  title: string;
  action?: ReactNode;
  className?: string;
};

export function SectionHeader({ label, title, action, className }: SectionHeaderProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6", className)}>
      <div className="min-w-0">
        {label && <p className="section-label">{label}</p>}
        <h2 className="section-title mt-2 sm:mt-3">{title}</h2>
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

type WritingListItemProps = {
  index: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  slug: string;
  LinkComponent: React.ComponentType<{
    to: string;
    params?: Record<string, string>;
    className?: string;
    children: ReactNode;
  }>;
  slug: string;
};

export function WritingListItem({
  index,
  category,
  title,
  excerpt,
  date,
  readTime,
  LinkComponent,
  slug,
}: WritingListItemProps) {
  return (
    <li>
      <LinkComponent
        to="/blog/$slug"
        params={{ slug }}
        className="group block py-6 sm:py-8 px-2 sm:px-3 hover:bg-card/40 transition rounded-lg -mx-2 sm:-mx-3"
      >
        <div className="flex flex-col gap-3 sm:grid sm:grid-cols-[3rem_1fr] md:grid-cols-[4rem_7rem_1fr] lg:grid-cols-[5rem_8rem_1fr_auto] sm:gap-x-4 md:gap-x-6 sm:items-start">
          <span className="font-display text-2xl sm:text-3xl text-gold/50 leading-none">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gold sm:pt-1.5">
            {category}
          </span>
          <div className="min-w-0 sm:col-span-1 md:col-span-1 lg:col-span-1">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl group-hover:text-gold transition leading-snug">
              {title}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3 sm:line-clamp-2">
              {excerpt}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-muted-foreground sm:pt-1.5 lg:text-right lg:flex-col lg:items-end lg:gap-1">
            <span>{date}</span>
            {readTime && <span className="text-gold/70">{readTime}</span>}
          </div>
        </div>
      </LinkComponent>
    </li>
  );
}
