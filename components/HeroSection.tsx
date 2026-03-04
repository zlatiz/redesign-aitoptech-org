import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-hero-gradient overflow-hidden pt-20">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Geometric Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Floating Polygons */}
        <svg className="absolute top-1/4 right-1/4 w-32 h-32 text-primary-400/20 animate-pulse" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor"/>
        </svg>
        <svg className="absolute bottom-1/3 left-1/4 w-24 h-24 text-accent-cyan/20 animate-pulse" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor"/>
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] py-12">
          {/* Left Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              About — <span className="text-gradient">Ai TOP</span>
              <br />
              <span className="text-gradient">TECHNOLOGIES</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl leading-relaxed">
              Transforming industries with cutting-edge artificial intelligence 
              and advanced technology solutions. Our journey, mission, and 
              commitment to innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#about" className="btn-primary">
                LEARN MORE ABOUT US
              </Link>
            </div>
          </div>

          {/* Right Content - Decorative Image Area */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Neural Network Visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Center Node */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-primary-400 to-accent-cyan rounded-full shadow-lg shadow-primary-500/50 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">Ai</span>
                  </div>
                  
                  {/* Orbiting Nodes */}
                  {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                    <div
                      key={i}
                      className="absolute w-10 h-10 bg-white/20 rounded-full backdrop-blur-sm border border-white/30"
                      style={{
                        top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                        left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                    />
                  ))}
                  
                  {/* Connection Lines */}
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 320 320">
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <line
                        key={i}
                        x1="160"
                        y1="160"
                        x2={160 + 128 * Math.cos((angle * Math.PI) / 180)}
                        y2={160 + 128 * Math.sin((angle * Math.PI) / 180)}
                        stroke="rgba(59, 130, 246, 0.3)"
                        strokeWidth="2"
                      />
                    ))}
                  </svg>

                  {/* Outer Ring */}
                  <div className="absolute inset-0 border-2 border-primary-400/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-4 border border-accent-cyan/20 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#F8FAFC"/>
        </svg>
      </div>
    </section>
  );
}