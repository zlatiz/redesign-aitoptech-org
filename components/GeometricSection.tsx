export default function GeometricSection() {
  return (
    <section className="py-32 px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Innovative AI Solutions
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Leveraging advanced technologies to drive business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">AI Implementation</h3>
            <p className="text-muted leading-relaxed">
              Custom AI solutions tailored to your business needs
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Technology Consulting</h3>
            <p className="text-muted leading-relaxed">
              Expert guidance for your digital transformation journey
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Enterprise Solutions</h3>
            <p className="text-muted leading-relaxed">
              Scalable systems built for growth and reliability
            </p>
          </div>
        </div>

        {/* Decorative cone shape inspired by mockup */}
        <div className="flex justify-center opacity-10">
          <svg width="240" height="240" viewBox="0 0 240 240" className="text-foreground">
            {/* Cone shape */}
            <path d="M120 40 L200 180 Q120 200 40 180 Z" fill="currentColor" />
            <ellipse cx="120" cy="180" rx="80" ry="20" fill="currentColor" />
          </svg>
        </div>
      </div>
    </section>
  );
}