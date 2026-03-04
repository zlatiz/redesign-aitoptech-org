import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brand-light-bg text-center">
      <h1 className="text-4xl font-bold text-brand-dark-blue mb-4">Welcome to Ai TOP TECHNOLOGIES</h1>
      <p className="text-lg text-brand-text-secondary mb-8">This is the Home Page.</p>
      <Link href="/about" className="px-6 py-3 bg-brand-primary-blue text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors">
        Learn About Us
      </Link>
    </div>
  );
}