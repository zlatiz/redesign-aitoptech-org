import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-hero via-[rgb(25,45,40)] to-[rgb(20,35,35)]">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(32, 157, 80, 0.3) 0%, transparent 50%)`,
              backgroundSize: "100px 100px",
            }}
          ></div>
        </div>

        {/* Globe/Tech visual element */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-[600px] h-[600px] rounded-full border-2 border-primary/30"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full border-2 border-primary/20"></div>
          <div className="absolute w-[400px] h-[400px] rounded-full border-2 border-primary/10"></div>
        </div>

        <div className="container-custom relative z-10 text-center py-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            AI TOP TECHNOLOGIES
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            Pioneering advanced artificial intelligence solutions for tomorrow&apos;s
            enterprises.
          </p>
          <Link
            href="/about"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 uppercase tracking-wider text-sm shadow-lg hover:shadow-xl"
          >
            DISCOVER MORE
          </Link>
        </div>
      </section>

      {/* Corporate Information Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M9 9H15M9 13H15M9 17H13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-text mb-2">
                Corporate Information
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-10 text-center border border-text/5">
              <h3 className="text-2xl font-bold text-primary mb-3">
                Ai Top Technologies LLC
              </h3>
              <p className="text-text/70 text-sm uppercase tracking-wider">
                Registered in Delaware, USA
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}