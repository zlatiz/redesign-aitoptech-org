import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Network Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, rgba(32, 157, 80, 0.3) 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, rgba(32, 157, 80, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 40% 70%, rgba(32, 157, 80, 0.2) 0%, transparent 50%),
                            radial-gradient(circle at 90% 80%, rgba(32, 157, 80, 0.3) 0%, transparent 50%)`,
          }}>
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="1.5" fill="rgba(255,255,255,0.3)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              {/* Connection lines */}
              <line x1="10%" y1="30%" x2="30%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="30%" y1="50%" x2="50%" y2="40%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="50%" y1="40%" x2="70%" y2="60%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="70%" y1="60%" x2="90%" y2="50%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="20%" y1="70%" x2="40%" y2="80%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="40%" y1="80%" x2="60%" y2="75%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              <line x1="60%" y1="75%" x2="80%" y2="85%" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              {/* Node highlights */}
              <circle cx="10%" cy="30%" r="3" fill="rgba(255,255,255,0.6)" />
              <circle cx="30%" cy="50%" r="3" fill="rgba(255,255,255,0.6)" />
              <circle cx="50%" cy="40%" r="3" fill="rgba(255,255,255,0.6)" />
              <circle cx="70%" cy="60%" r="3" fill="rgba(255,255,255,0.6)" />
              <circle cx="90%" cy="50%" r="3" fill="rgba(255,255,255,0.6)" />
            </svg>
          </div>
        </div>

        <div className="container-custom relative z-10 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ai TOP TECHNOLOGIES
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Ai Top Technologies LLC - Registered in Delaware, USA
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-text max-w-2xl">
              Explore our cutting-edge AI technologies and solutions designed for the modern enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              }
              title="Artificial Intelligence"
              description="Advanced AI solutions for modern challenges, making operations smarter and more efficient."
            />

            <ServiceCard
              icon={
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              }
              title="Machine Learning"
              description="Scalable machine learning models that adapt and grow with your data."
            />

            <ServiceCard
              icon={
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              }
              title="Data Analytics"
              description="Data-driven insights for strategic, high-impact decision-making."
            />
          </div>
        </div>
      </section>
    </div>
  );
}