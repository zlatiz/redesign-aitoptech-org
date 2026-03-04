import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import GearIcon from "@/components/icons/GearIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div id="page">
      {/* Hero Section */}
      <HeroSection title="About — Ai TOP TECHNOLOGIES" />

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Innovating with AI Solutions */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Innovating with AI Solutions
              </h2>
              <FeatureCard 
                icon={<GearIcon />}
                title="Transforming Business"
                description="We harness advanced artificial intelligence to create cutting-edge technology for smarter operations and data-driven insights"
              />
            </div>

            {/* Our Expert Team */}
            <div>
              <h2 className="text-2xl font-bold text-navy-900 mb-6">
                Our Expert Team
              </h2>
              <FeatureCard 
                icon={<TeamIcon />}
                title="Industry Leaders"
                description="Dedicated specialists driving growth and efficiency through tailored technological integration and strategic implementation"
                image="team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg shadow-gray-200/50 py-8">
            <div className="grid grid-cols-3 divide-x divide-gray-200">
              <StatCard value="98%" label="Client Satisfaction" />
              <StatCard value="500+" label="Projects Completed" />
              <StatCard value="10+" label="Years Innovation" />
            </div>
          </div>
        </div>
      </section>

      {/* About Content Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-navy-900 mb-8">
            About AI Top Technologies
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed mb-12">
            Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.
          </p>

          {/* Who We Work With */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Who we work with:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Startups with complex infrastructure needs</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Agencies that need scalable backends</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center mt-0.5">
                  <svg className="w-4 h-4 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Enterprises building new internal tools</span>
              </li>
            </ul>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-navy-900 mb-6">
              Our Values:
            </h3>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="font-semibold text-navy-900">Simplicity over noise</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="font-semibold text-navy-900">Ethics before hype</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <p className="font-semibold text-navy-900">Execution that scales</p>
              </div>
            </div>
          </div>

          {/* Company Info */}
          <div className="bg-primary-50 rounded-2xl p-8 text-center">
            <p className="text-navy-900 font-semibold mb-2">
              Ai Top Technologies LLC
            </p>
            <p className="text-gray-600 mb-4">
              Registered in Delaware, USA
            </p>
            <a 
              href="mailto:info@aitoptech.org" 
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              info@aitoptech.org
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Have a project in mind?
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