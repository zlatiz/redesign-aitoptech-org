import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-2xl text-muted mb-8">Page not found</p>
        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}