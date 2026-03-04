export default function AboutPage() {
  const clientTypes = [
    "Startups with complex infrastructure needs",
    "Agencies that need scalable backends",
    "Enterprises building new internal tools",
  ];

  const values = [
    "Simplicity over noise",
    "Ethics before hype",
    "Execution that scales",
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container-custom">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-text mb-4">
            About — Ai TOP
            <br />
            TECHNOLOGIES
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-12 md:p-16 border border-text/5">
            {/* About Section */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-text mb-6 text-center">
                About AI Top Technologies
              </h2>
              <p className="text-text/80 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                AI TOP TECHNOLOGIES is dedicated to pioneering premium artificial intelligence
                solutions that empower businesses. Our approach blends cutting-edge technical
                expertise with strategic thinking, ensuring that our solutions not only solve complex problems but do so with an intuitive grace that elevates
                the user experience.
              </p>
            </div>

            {/* Company Registration Info */}
            <div className="bg-primary/5 rounded-xl p-8 mb-12 text-center border border-primary/10">
              <p className="text-primary font-bold text-xl mb-1">
                Ai Top Technologies LLC
              </p>
              <p className="text-text/60 text-sm uppercase tracking-wider">
                REGISTERED IN DELAWARE, USA
              </p>
            </div>

            {/* Who We Work With */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-text mb-6">
                Who we work with:
              </h3>
              <ul className="space-y-4">
                {clientTypes.map((client, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-text/80 text-lg">{client}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Values */}
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">Our Values:</h3>
              <ul className="space-y-4">
                {values.map((value, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span className="text-text/80 text-lg">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}