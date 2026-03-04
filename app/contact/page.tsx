import Link from "next/link";

export const metadata = {
  title: "Contact — Ai TOP TECHNOLOGIES",
  description: "Get in touch with Ai Top Technologies for AI solutions and technology consulting.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-hero-gradient overflow-hidden pt-20 flex items-center">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>
        
        <div className="section-container relative z-10 py-20">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Have a project in mind? We&apos;d love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-surface-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-text-primary mb-6">Get in Touch</h2>
              <p className="text-text-secondary mb-8 leading-relaxed">
                Founded by a cross-functional team of engineers, advisors, and project managers, 
                AiTT supports mission-driven ventures through the full technology lifecycle — 
                from architecture and compliance to AI integration and deployment.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Location</h3>
                    <p className="text-text-secondary">Ai Top Technologies LLC</p>
                    <p className="text-text-secondary">Registered in Delaware, USA</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Email</h3>
                    <a href="mailto:info@aitoptech.org" className="text-primary-600 hover:text-primary-700 transition-colors">
                      info@aitoptech.org
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-semibold text-text-primary mb-4">Who we work with:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-text-secondary">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    Startups with complex infrastructure needs
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    Agencies that need scalable backends
                  </li>
                  <li className="flex items-center gap-3 text-text-secondary">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    Enterprises building new internal tools
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  CONNECT
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}