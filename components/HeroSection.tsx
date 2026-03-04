import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-hero overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary-600/20 via-transparent to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Ai TOP TECHNOLOGIES
        </h1>
        <p className="text-base md:text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
          Ai Top Technologies LLC<br />Registered in Delaware, USA
        </p>
        <Link 
          href="#sections"
          className="inline-block px-8 py-3 bg-primary-500 text-white font-medium rounded hover:bg-primary-600 transition-colors"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}