import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center pt-20">
      <div className="text-center text-white">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">404</h1>
        <p className="text-xl text-white/80 mb-8">Page not found</p>
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
      </div>
    </section>
  );
}