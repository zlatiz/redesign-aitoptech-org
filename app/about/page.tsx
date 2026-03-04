export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
          <span className="text-gradient">About Us</span>
        </h1>

        <div className="space-y-8 text-slate-300 leading-relaxed">
          <div className="glassmorphism rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4 text-white">Ai Top Technologies LLC</h2>
            <p className="mb-4">Registered in Delaware, USA</p>
            <p className="mb-6">
              Ai TOP TECHNOLOGIES is pioneering the next generation of artificial intelligence solutions for global
              enterprises. We specialize in cutting-edge AI architecture, neural networks, and autonomous systems.
            </p>
          </div>

          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">Our Mission</h3>
            <p>
              To deliver state-of-the-art artificial intelligence solutions that transform how enterprises operate,
              enabling them to harness the power of predictive analytics, deep learning, and autonomous decision-making
              systems.
            </p>
          </div>

          <div className="glassmorphism rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-white">What We Do</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Predictive Analytics - Advanced data forecasting and insights using machine learning</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Neural Network Architecture - Deep learning models for complex pattern recognition</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>Autonomous Systems - Self-governing robotics with real-time decision capabilities</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>AI Consulting - Strategic guidance for enterprise AI implementation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                <span>ML Development - Custom machine learning solutions tailored to your needs</span>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="glassmorphism rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-primary mb-2">99.9%</p>
              <p className="text-slate-400 uppercase tracking-wider text-sm">Accuracy Rate</p>
            </div>
            <div className="glassmorphism rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-primary mb-2">500+</p>
              <p className="text-slate-400 uppercase tracking-wider text-sm">Enterprise Clients</p>
            </div>
            <div className="glassmorphism rounded-xl p-6 text-center">
              <p className="text-4xl font-black text-primary mb-2">24/7</p>
              <p className="text-slate-400 uppercase tracking-wider text-sm">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}