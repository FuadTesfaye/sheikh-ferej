import { Link } from '@/i18n/navigation';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol className="flex items-center space-x-2 text-sm text-[#636E72] flex-wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          
          return (
            <li key={index} className="flex items-center">
              {item.href && !isLast ? (
                <Link 
                  href={item.href}
                  className="font-body hover:text-[#2D3436] transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-body ${isLast ? 'text-[#2D3436] font-medium' : ''}`}>
                  {item.label}
                </span>
              )}
              
              {!isLast && (
                <span className="mx-2 text-[#E0D8CE]">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
