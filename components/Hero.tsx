import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-navy-900 via-primary-800 to-primary-600 text-white py-20 px-6 overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-white/5 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary-400/10 rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          About — Ai TOP<br />TECHNOLOGIES
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl">
          Empowering businesses with cutting-edge AI solutions, automatics, and innovation to custominate solutions.
        </p>
        <Link
          href="/about"
          className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
        >
          LEARN MORE ABOUT US
        </Link>
      </div>
    </section>
  );
}