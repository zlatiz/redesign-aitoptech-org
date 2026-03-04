import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Ai TOP TECHNOLOGIES",
  description: "Get in touch with our team for inquiries, support, or partnership opportunities.",
};

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="border-b border-gray-200 py-12 md:py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Contact Us
          </h1>
          <p className="text-base md:text-lg text-text max-w-2xl mx-auto">
            Get in touch with our team for inquiries, support, or partnership opportunities.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding">
        <div className="container-custom max-w-2xl mx-auto">
          {/* Email Contact Card */}
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-green/10 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-accent-green"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            
            <h2 className="text-sm uppercase tracking-wide text-text/60 mb-2">
              EMAIL US DIRECTLY
            </h2>
            <a
              href="mailto:info@aitoptech.org"
              className="text-2xl md:text-3xl font-bold text-text hover:text-accent-green transition-colors"
            >
              info@aitoptech.org
            </a>
          </div>

          {/* Company Info */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-5 h-5 bg-accent-green rounded flex items-center justify-center">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text">
                Ai TOP TECHNOLOGIES LLC
              </h3>
            </div>
            <p className="text-base text-text/80">
              REGISTERED IN DELAWARE, USA
            </p>
          </div>

          {/* Additional Contact Options */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-white">
              <svg
                className="w-8 h-8 text-accent-green mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h4 className="font-semibold text-text mb-1">Location</h4>
              <p className="text-sm text-text/70">Delaware, USA</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white">
              <svg
                className="w-8 h-8 text-accent-green mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h4 className="font-semibold text-text mb-1">Response Time</h4>
              <p className="text-sm text-text/70">24-48 hours</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-white">
              <svg
                className="w-8 h-8 text-accent-green mx-auto mb-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h4 className="font-semibold text-text mb-1">Partnerships</h4>
              <p className="text-sm text-text/70">Open to collaborations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}