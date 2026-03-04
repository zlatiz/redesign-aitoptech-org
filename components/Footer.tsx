import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-text/10 mt-24">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    fill="white"
                    fillOpacity="0.9"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-text font-bold text-sm tracking-wide uppercase">
                AI TOP TECHNOLOGIES
              </span>
            </div>
            <div className="text-sm text-text/70 space-y-1">
              <p className="font-semibold">Ai Top Technologies LLC</p>
              <p>Registered in Delaware, USA</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wide mb-4 text-text">
              Contact
            </h3>
            <div className="space-y-2">
              <a
                href="mailto:info@aitoptech.org"
                className="text-sm text-text/70 hover:text-primary transition-colors block"
              >
                info@aitoptech.org
              </a>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm text-text/70 mb-4">Have a project in mind?</p>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 uppercase tracking-wide"
            >
              CONNECT
            </Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-text/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text/60">
            <div className="flex items-center gap-6">
              <Link href="#" className="hover:text-primary transition-colors">
                PRIVACY POLICY
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                TERMS OF SERVICE
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                LEGAL
              </Link>
            </div>
            <div className="text-center md:text-right">
              <p>© 2025 Ai TOP TECHNOLOGIES LLC. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}