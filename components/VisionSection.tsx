export default function VisionSection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision & Purpose Card */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">DRIVING INNOVATION<br />WITH PURPOSE</h3>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Our Vision & Purpose</h4>
                <p className="text-sm font-bold text-gray-700 mb-3">EMPOWER INNOVATION WITH CUTTING-EDGE AI</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values Card */}
          <div className="bg-gray-50 rounded-lg p-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mt-4">INTEGRITY,<br />COLLABORATION,<br />EXCELLENCE</h3>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Core Values & Culture</h4>
                <p className="text-sm font-bold text-gray-700 mb-1">INTEGRITY, COLLABORATION, GRITARE</p>
                <p className="text-sm font-bold text-gray-700 mb-3">INTEGRITY, COLLABORATION, EXCELLENCE</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Our Values: Simplicity over noise, Ethics before hype, Execution that scales
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}