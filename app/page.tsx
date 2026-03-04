import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import StatCard from "@/components/StatCard";
import GearIcon from "@/components/icons/GearIcon";
import TeamIcon from "@/components/icons/TeamIcon";
import Link from "next/link";

export default function Home() {
  return (
    <div id="page">
      {/* Hero Section */}
      <HeroSection title="Ai TOP TECHNOLOGIES" />

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

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-navy-900 mb-4">
            Have a project in mind?
          </h2>
          <p className="text-gray-600 mb-8">
            Let&apos;s discuss how we can help transform your business with AI-powered solutions.
          </p>
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