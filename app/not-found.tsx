import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl font-bold text-background-dark mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-background-dark mb-6">
        Page Not Found
      </h2>
      <p className="text-gray-700 mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="inline-block px-8 py-3 bg-primary-500 text-white font-medium rounded hover:bg-primary-600 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}