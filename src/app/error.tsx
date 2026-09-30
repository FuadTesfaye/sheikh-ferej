"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4 px-6">
        <h1 className="font-heading text-2xl font-bold text-text">
          Something went wrong
        </h1>
        <p className="text-text-secondary max-w-md">
          This content is temporarily unavailable. Please try again.
        </p>
        <button
          onClick={reset}
          className="inline-block mt-4 px-6 py-2.5 bg-accent text-text-inverse rounded-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
