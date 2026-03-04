import Link from "next/link";

interface HeroSectionProps {
  title: string;
  showCta?: boolean;
}

export default function HeroSection({ title, showCta = true }: HeroSectionProps) {
  return (
    <section className="relative min-h-[400px] lg:min-h-[500px] overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Mesh */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30">
          <svg 
            viewBox="0 0 800 600" 
            fill="none" 
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Abstract tech pattern lines */}
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            
            {/* Curved lines */}
            <path 
              d="M400 0 Q600 150 500 300 T700 600" 
              stroke="url(#lineGradient)" 
              strokeWidth="2" 
              fill="none"
            />
            <path 
              d="M500 0 Q700 200 600 400 T800 600" 
              stroke="url(#lineGradient)" 
              strokeWidth="1.5" 
              fill="none"
            />
            <path 
              d="M300 0 Q500 100 450 250 T600 500" 
              stroke="url(#lineGradient)" 
              strokeWidth="1" 
              fill="none"
            />
            
            {/* Dots pattern */}
            <circle cx="450" cy="100" r="3" fill="#3B82F6" opacity="0.4" />
            <circle cx="550" cy="180" r="2" fill="#3B82F6" opacity="0.3" />
            <circle cx="600" cy="250" r="4" fill="#06B6D4" opacity="0.3" />
            <circle cx="500" cy="320" r="2" fill="#3B82F6" opacity="0.4" />
            <circle cx="650" cy="400" r="3" fill="#06B6D4" opacity="0.3" />
            <circle cx="700" cy="150" r="2" fill="#3B82F6" opacity="0.2" />
            <circle cx="750" cy="300" r="3" fill="#06B6D4" opacity="0.2" />
            
            {/* Diamond shapes */}
            <rect 
              x="680" 
              y="200" 
              width="20" 
              height="20" 
              transform="rotate(45 690 210)" 
              stroke="#3B82F6" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.3"
            />
            <rect 
              x="720" 
              y="350" 
              width="15" 
              height="15" 
              transform="rotate(45 727 357)" 
              stroke="#06B6D4" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.25"
            />
            <rect 
              x="580" 
              y="450" 
              width="12" 
              height="12" 
              transform="rotate(45 586 456)" 
              stroke="#3B82F6" 
              strokeWidth="1" 
              fill="none" 
              opacity="0.2"
            />
          </svg>
        </div>

        {/* Additional floating elements */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-gradient-to-br from-cyan-200/20 to-blue-200/20 rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight mb-8">
            {title}
          </h1>
          
          {showCta && (
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-600/25"
            >
              Get Started Now
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}