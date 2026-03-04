import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
        {/* Background Grid/Nebula Effect */}
        <div
          className="absolute inset-0 z-0 opacity-40 bg-gradient-to-br from-primary/20 via-accent/10 to-transparent"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(60, 131, 246, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(60, 131, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            mixBlendMode: "screen",
          }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-background-dark/80 to-background-dark" />

        <div className="relative z-10 max-w-4xl flex flex-col items-center gap-6">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-2">
            <span className="text-gradient">AI TOP TECHNOLOGIES</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed">
            Pioneering the next generation of artificial intelligence solutions for global enterprises.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(60,131,246,0.5)]">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-lg glassmorphism text-slate-100 font-bold text-lg hover:bg-slate-800/50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Advanced AI Capabilities</h3>
          <p className="text-slate-400 text-lg">Cutting-edge solutions powering the future of enterprise tech.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature Card 1 */}
          <div className="glassmorphism rounded-xl p-8 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-3xl">ssid_chart</span>
            </div>
            <h4 className="text-xl font-bold">Predictive Analytics</h4>
            <p className="text-slate-400 leading-relaxed">
              Advanced data forecasting and insights. Leverage historical data to predict future trends with
              remarkable accuracy.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="glassmorphism rounded-xl p-8 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300 border-primary/30 shadow-[0_0_15px_rgba(60,131,246,0.1)]">
            <div className="size-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent mb-2">
              <span className="material-symbols-outlined text-3xl">psychology</span>
            </div>
            <h4 className="text-xl font-bold">Neural Network Architecture</h4>
            <p className="text-slate-400 leading-relaxed">
              State-of-the-art deep learning models designed to process complex patterns and unstructured data.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="glassmorphism rounded-xl p-8 flex flex-col gap-4 hover:-translate-y-2 transition-transform duration-300">
            <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-2">
              <span className="material-symbols-outlined text-3xl">smart_toy</span>
            </div>
            <h4 className="text-xl font-bold">Autonomous Systems</h4>
            <p className="text-slate-400 leading-relaxed">
              Self-governing robotics and drone systems equipped with real-time decision-making capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full bg-deep-blue py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/20 text-center">
          <div className="flex flex-col gap-2 p-4">
            <p className="text-5xl font-black text-white mb-2">99.9%</p>
            <p className="text-blue-200 text-lg font-medium uppercase tracking-wider">Accuracy</p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-5xl font-black text-white mb-2">500+</p>
            <p className="text-blue-200 text-lg font-medium uppercase tracking-wider">Enterprises</p>
          </div>
          <div className="flex flex-col gap-2 p-4">
            <p className="text-5xl font-black text-white mb-2">24/7</p>
            <p className="text-blue-200 text-lg font-medium uppercase tracking-wider">Support</p>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 px-4 max-w-4xl mx-auto">
        <div className="glassmorphism rounded-2xl p-10 md:p-14 relative">
          <span className="material-symbols-outlined absolute top-8 left-8 text-6xl text-slate-700/50">
            format_quote
          </span>
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="flex gap-1 text-primary mb-6">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </div>
            <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-slate-200 italic">
              &quot;Ai TOP TECHNOLOGIES has completely transformed our data operations with their cutting-edge AI
              architecture and predictive models. The ROI was visible within the first quarter.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="size-14 rounded-full bg-slate-800 bg-gradient-to-br from-primary/30 to-accent/30" />
              <div className="text-left">
                <h5 className="font-bold text-lg">Sarah Jenkins</h5>
                <p className="text-slate-400 text-sm">CTO, Global Enterprise Corp</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}