import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gray-200">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-accent-green rounded flex items-center justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"
                    fill="white"
                  />
                </svg>
              </div>
              <span className="text-sm font-semibold text-text">
                Ai TOP TECHNOLOGIES
              </span>
            </div>
            <p className="text-sm text-text mb-2">
              Ai Top Technologies LLC
            </p>
            <p className="text-sm text-text mb-4">
              Registered in Delaware, USA
            </p>
            <a
              href="mailto:info@aitoptech.org"
              className="text-sm text-accent-green hover:underline"
            >
              info@aitoptech.org
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-8">
            <div>
              <Link
                href="/privacy"
                className="text-sm text-text hover:text-accent-green block mb-2"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-text hover:text-accent-green block"
              >
                Terms of Service
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm text-text mb-3">Have a project in mind?</p>
            <Link href="/contact" className="btn-primary inline-block">
              CONNECT
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-text text-center">
            © 2025 Ai Top Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}