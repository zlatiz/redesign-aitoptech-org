export default function ContactPage() {
  return (
    <section className="px-10 lg:px-40 py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="border-l-4 border-primary pl-6">
          <h1 className="text-text-primary text-4xl lg:text-5xl font-bold leading-tight tracking-tight pb-6 uppercase">
            Contact Us
          </h1>
          <div className="space-y-6 text-text-secondary text-lg font-normal leading-relaxed max-w-3xl">
            <p>
              Have a project in mind? We'd love to hear from you. Get in touch
              with our team to discuss how we can help transform your business
              with intelligent solutions.
            </p>
          </div>
        </div>

        <div className="mt-16 border-l-4 border-primary pl-6">
          <h2 className="text-text-primary text-3xl font-bold leading-tight tracking-tight pb-4 uppercase">
            Get In Touch
          </h2>
          <div className="space-y-4 text-text-secondary text-lg font-normal leading-relaxed max-w-3xl">
            <div>
              <p className="font-semibold text-text-primary mb-2">
                Company Information
              </p>
              <p>Ai Top Technologies LLC</p>
              <p>Registered in Delaware, USA</p>
            </div>
            <div>
              <p className="font-semibold text-text-primary mb-2">Email</p>
              <a
                href="mailto:info@aitoptech.org"
                className="text-primary hover:underline"
              >
                info@aitoptech.org
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-start pl-6">
          <a
            href="mailto:info@aitoptech.org"
            className="flex min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-wide shadow-lg"
          >
            <span className="truncate">CONNECT</span>
          </a>
        </div>
      </div>
    </section>
  );
}