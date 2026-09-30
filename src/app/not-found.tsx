import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface">
      <div className="text-center space-y-4 px-6">
        <h1 className="font-heading text-4xl font-bold text-text">Page not found</h1>
        <p className="text-text-secondary text-lg max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block mt-4 px-6 py-2.5 bg-accent text-text-inverse rounded-sm font-medium hover:bg-accent-hover transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}
