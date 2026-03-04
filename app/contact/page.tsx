export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-center">
          <span className="text-gradient">Contact Us</span>
        </h1>

        <p className="text-center text-slate-300 text-lg mb-12">Have a project in mind?</p>

        <div className="glassmorphism rounded-2xl p-8 md:p-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Email</h3>
                <a
                  href="mailto:info@aitoptech.org"
                  className="text-slate-300 hover:text-primary transition-colors"
                >
                  info@aitoptech.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-12 rounded-lg bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <span className="material-symbols-outlined">business</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Company</h3>
                <p className="text-slate-300">Ai Top Technologies LLC</p>
                <p className="text-slate-400 text-sm">Registered in Delaware, USA</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="size-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <span className="material-symbols-outlined">support_agent</span>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Support</h3>
                <p className="text-slate-300">24/7 Support Available</p>
                <p className="text-slate-400 text-sm">We&apos;re here to help with your AI initiatives</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-700">
            <h3 className="font-bold text-xl mb-6 text-center">Ready to Get Started?</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(60,131,246,0.5)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}