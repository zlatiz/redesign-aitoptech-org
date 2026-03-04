export default function ContactPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-foreground mb-8">Contact</h1>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Have a project in mind?</h2>
              <p className="text-lg text-muted mb-8">
                Get in touch with us to discuss how we can help transform your business with AI technology solutions.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Email</p>
                  <a 
                    href="mailto:info@aitoptech.org" 
                    className="text-lg text-primary hover:text-primary-700 transition-colors"
                  >
                    info@aitoptech.org
                  </a>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">Company</p>
                  <p className="text-lg text-foreground">Ai Top Technologies LLC</p>
                  <p className="text-base text-muted">Registered in Delaware, USA</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <a
                href="mailto:info@aitoptech.org"
                className="inline-block bg-primary hover:bg-primary-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              >
                CONNECT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}