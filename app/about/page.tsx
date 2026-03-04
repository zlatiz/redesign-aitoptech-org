import Hero from '@/components/Hero';

export const metadata = {
  title: 'About — Ai TOP TECHNOLOGIES',
  description: 'Founded by a cross-functional team of engineers, advisors, and project managers',
};

export default function About() {
  return (
    <>
      <Hero
        title="About — Ai TOP TECHNOLOGIES"
        ctaText="Learn More About Us"
        ctaLink="#mission"
      />

      {/* Main Content Section */}
      <section id="mission" className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* About AI Top Technologies */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About AI Top Technologies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.
            </p>
          </div>

          {/* Who we work with */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Who we work with:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-gray-700">
                  Startups with complex infrastructure needs
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-gray-700">
                  Agencies that need scalable backends
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-gray-700">
                  Enterprises building new internal tools
                </span>
              </li>
            </ul>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Values:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-gray-700">
                  Simplicity over noise
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-gray-700">
                  Ethics before hype
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-lg text-gray-700">
                  Execution that scales
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Company Info Banner */}
      <section className="py-12 bg-gradient-to-br from-blue-600 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Ai Top Technologies LLC</h3>
          <p className="text-blue-100 mb-4">Registered in Delaware, USA</p>
          <a
            href="mailto:info@aitoptech.org"
            className="text-lg text-white hover:text-blue-200 underline transition-colors"
          >
            info@aitoptech.org
          </a>
        </div>
      </section>
    </>
  );
}
