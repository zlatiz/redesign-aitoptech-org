export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background geometric decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 text-balance">
          AI Technology
          <span className="block text-primary mt-2">Solutions</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted max-w-3xl mx-auto mb-12 text-balance leading-relaxed">
          Transforming businesses through cutting-edge artificial intelligence and innovative technology solutions
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/contact"
            className="inline-block bg-primary hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Get Started
          </a>
          <a
            href="/about"
            className="inline-block bg-white hover:bg-foreground/5 text-foreground font-semibold px-8 py-4 rounded-lg transition-all duration-200 border-2 border-foreground/10"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative triangle shape inspired by mockup */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-5">
        <svg width="200" height="200" viewBox="0 0 200 200" className="text-foreground">
          <path d="M100 20 L180 180 L20 180 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}