"use client";

import { cn } from "@/lib/utils";

interface ErrorStateProps {
  title?: string;
  description?: string;
  onRetry?: () => void;
  retryLabel?: string;
  className?: string;
}

export function ErrorState({
  title = "This content is temporarily unavailable.",
  description,
  onRetry,
  retryLabel = "Try again",
  className,
}: ErrorStateProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center py-20 text-center", className)}>
      <h3 className="font-heading text-lg font-semibold text-text mb-2">{title}</h3>
      {description && (
        <p className="text-text-secondary text-sm max-w-sm mb-4">{description}</p>
      )}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-5 py-2 bg-accent text-text-inverse rounded-sm text-sm font-medium hover:bg-accent-hover transition-colors"
        >
          {retryLabel}
        </button>
      )}
    </div>
  );
}
