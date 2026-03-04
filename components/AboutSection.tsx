export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-surface-light">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image/Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-navy-900 to-primary-900">
              {/* Neural Network Background */}
              <div className="absolute inset-0 flex items-center justify-center p-8">
                <div className="relative w-full h-full">
                  {/* Grid of nodes */}
                  <svg className="w-full h-full" viewBox="0 0 400 300">
                    {/* Connection lines */}
                    <g stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <line
                          key={i}
                          x1={50 + (i % 5) * 75}
                          y1={50 + Math.floor(i / 5) * 60}
                          x2={125 + ((i + 1) % 4) * 75}
                          y2={80 + Math.floor((i + 2) / 4) * 60}
                        />
                      ))}
                    </g>
                    {/* Nodes */}
                    <g fill="rgba(34, 211, 238, 0.5)">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <circle
                          key={i}
                          cx={60 + (i % 5) * 70}
                          cy={50 + Math.floor(i / 5) * 80}
                          r={6 + (i % 3) * 3}
                        />
                      ))}
                    </g>
                    {/* Central glow */}
                    <circle cx="200" cy="150" r="40" fill="url(#centerGlow)" />
                    <defs>
                      <radialGradient id="centerGlow">
                        <stop offset="0%" stopColor="rgba(59, 130, 246, 0.8)" />
                        <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
              {/* Overlay Text */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4">
                <p className="text-white text-sm font-medium">AI-Powered Solutions</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-cyan/10 rounded-full -z-10" />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Who We Are</span>
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
                About AI Top Technologies...
              </h2>
            </div>
            
            <p className="text-text-secondary text-lg leading-relaxed">
              We are a pioneering force in the AI landscape, delivering 
              high-performance technological solutions that drive 
              growth and efficiency.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              Our core competencies lie in machine learning, data 
              analytics, and custom AI integrations.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              Founded on principles of innovation and integrity, we 
              partner with businesses to leverage the transformative 
              power of artificial intelligence.
            </p>
            
            <p className="text-text-secondary leading-relaxed">
              We believe in building solutions that are not only 
              advanced but also accessible, enabling companies of all 
              sizes to thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}