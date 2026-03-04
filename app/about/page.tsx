import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Ai TOP TECHNOLOGIES",
  description: "Pioneering the Future of Artificial Intelligence",
};

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-text">
            About — Ai TOP TECHNOLOGIES
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Image/Visual Section */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-lg overflow-hidden">
                {/* Network visualization */}
                <div className="absolute inset-0 opacity-40">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="about-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="1" fill="rgba(255,255,255,0.4)" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#about-grid)" />
                    <line x1="20%" y1="20%" x2="40%" y2="35%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <line x1="40%" y1="35%" x2="60%" y2="30%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <line x1="60%" y1="30%" x2="80%" y2="50%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <line x1="30%" y1="60%" x2="50%" y2="70%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <line x1="50%" y1="70%" x2="70%" y2="75%" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                    <circle cx="20%" cy="20%" r="4" fill="rgba(32, 157, 80, 0.8)" />
                    <circle cx="40%" cy="35%" r="4" fill="rgba(32, 157, 80, 0.8)" />
                    <circle cx="60%" cy="30%" r="4" fill="rgba(32, 157, 80, 0.8)" />
                    <circle cx="80%" cy="50%" r="4" fill="rgba(32, 157, 80, 0.8)" />
                    <circle cx="30%" cy="60%" r="4" fill="rgba(32, 157, 80, 0.8)" />
                    <circle cx="50%" cy="70%" r="4" fill="rgba(32, 157, 80, 0.8)" />
                    <circle cx="70%" cy="75%" r="4" fill="rgba(32, 157, 80, 0.8)" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">
                Pioneering the Future of Artificial Intelligence
              </h2>
              
              <div className="space-y-4 text-text">
                <p className="text-base md:text-lg leading-relaxed">
                  Ai Top Technologies LLC - Registered in Delaware, USA. We specialize in delivering cutting-edge AI solutions and infrastructure for modern enterprises.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  We bridge the gap between complex machine learning algorithms and practical business applications.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  With a team of world-class engineers and data scientists, we build scalable, secure, and highly efficient AI models tailored to transform industries ranging from finance to healthcare.
                </p>
              </div>

              <Link href="/contact" className="btn-primary inline-block mt-8">
                Get In Touch
              </Link>
            </div>
          </div>

          {/* Additional Info Sections */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">
                About AI Top Technologies
              </h3>
              <p className="text-base text-text leading-relaxed mb-4">
                Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.
              </p>
              
              <h4 className="text-lg font-semibold text-text mt-6 mb-3">
                Who we work with:
              </h4>
              <ul className="space-y-2 text-base text-text">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">•</span>
                  Startups with complex infrastructure needs
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">•</span>
                  Agencies that need scalable backends
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">•</span>
                  Enterprises building new internal tools
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-text mb-3">
                Our Values:
              </h4>
              <ul className="space-y-2 text-base text-text">
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">•</span>
                  Simplicity over noise
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">•</span>
                  Ethics before hype
                </li>
                <li className="flex items-start">
                  <span className="text-accent-green mr-2">•</span>
                  Execution that scales
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}