import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title: string;
  description?: string;
  className?: string;
}

export function EmptyState({ title, description, className }: EmptyStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-20 text-center", className)}>
      <div className="w-16 h-16 rounded-full bg-surface-2 flex items-center justify-center mb-6">
        <div className="w-6 h-6 rounded-full bg-surface-3" />
      </div>
      <h3 className="font-heading text-lg font-semibold text-text mb-2">{title}</h3>
      {description && (
        <p className="text-text-secondary text-sm max-w-sm">{description}</p>
      )}
    </div>
  );
}
