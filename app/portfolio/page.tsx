import HeroSection from "@/components/HeroSection";
import Link from "next/link";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Enterprise AI Platform",
      category: "AI Integration",
      description: "Large-scale AI platform deployment for Fortune 500 company",
    },
    {
      title: "Healthcare Analytics",
      category: "Data & Compliance",
      description: "HIPAA-compliant analytics dashboard for medical providers",
    },
    {
      title: "Fintech Infrastructure",
      category: "Architecture",
      description: "Scalable microservices architecture for financial services",
    },
    {
      title: "E-commerce Automation",
      category: "AI Integration",
      description: "Intelligent inventory and pricing automation system",
    },
  ];

  return (
    <div id="page">
      {/* Hero Section */}
      <HeroSection title="Our Portfolio" />

      {/* Portfolio Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow"
              >
                {/* Project Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-cyan-100 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/80 rounded-2xl flex items-center justify-center">
                      <svg className="w-10 h-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-primary-600 font-medium">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-navy-900 mt-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Want to be our next success story?
          </h2>
          <Link 
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-primary-600/25"
          >
            CONNECT
          </Link>
        </div>
      </section>
    </div>
  );
}