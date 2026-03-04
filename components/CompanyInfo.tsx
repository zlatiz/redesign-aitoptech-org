export default function CompanyInfo() {
  return (
    <section className="py-16 bg-surface-muted">
      <div className="section-container">
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left - Info */}
            <div className="p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-6">
                Ai Top Technologies LLC Registered in Delaware, USA...
              </h2>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Headquartered in Delaware, Ai Top Technologies LLC is a globally recognized 
                technology provider. We specialize in advanced AI solutions and are committed 
                to legal compliance and operational excellence. Our dedication to research 
                and development ensures that we remain at the forefront of technological 
                advancement. Join us in shaping the future of AI.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-text-primary">Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.</h3>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-text-primary mb-3">Who we work with:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    Startups with complex infrastructure needs
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    Agencies that need scalable backends
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 bg-primary-500 rounded-full" />
                    Enterprises building new internal tools
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <h4 className="font-semibold text-text-primary mb-3">Our Values:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 bg-accent-teal rounded-full" />
                    Simplicity over noise
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 bg-accent-teal rounded-full" />
                    Ethics before hype
                  </li>
                  <li className="flex items-center gap-2 text-text-secondary">
                    <span className="w-2 h-2 bg-accent-teal rounded-full" />
                    Execution that scales
                  </li>
                </ul>
              </div>
            </div>

            {/* Right - Stats Preview */}
            <div className="bg-gradient-to-br from-primary-900 to-navy-900 p-8 lg:p-12 flex items-center">
              <div className="w-full">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
                    <p className="text-white/70 text-sm uppercase tracking-wider">Clients Worldwide</p>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">150+</div>
                    <p className="text-white/70 text-sm uppercase tracking-wider">Completed Projects</p>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">25+</div>
                    <p className="text-white/70 text-sm uppercase tracking-wider">Innovative AI Tools</p>
                  </div>
                  <div className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm">
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">98%</div>
                    <p className="text-white/70 text-sm uppercase tracking-wider">Client Satisfaction Rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}