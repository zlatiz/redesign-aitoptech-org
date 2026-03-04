import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 bg-surface-muted">
      <div className="section-container">
        <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-navy-900 rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have a project in mind?
            </h2>
            <p className="text-white/70 text-lg mb-8">
              Let&apos;s discuss how we can help transform your business with AI-powered solutions.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              CONNECT
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}