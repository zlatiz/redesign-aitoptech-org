import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background-light border-t border-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-sm font-semibold text-background-dark mb-3">
              Ai TOP TECHNOLOGIES
            </h3>
            <p className="text-sm text-gray-700">
              Ai Top Technologies LLC<br />
              Registered in Delaware, USA
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-background-dark mb-3">
              Contact
            </h3>
            <a 
              href="mailto:info@aitoptech.org" 
              className="text-sm text-gray-700 hover:text-primary-500 transition-colors"
            >
              info@aitoptech.org
            </a>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold text-background-dark mb-3">
              Have a project in mind?
            </h3>
            <Link 
              href="/contact"
              className="inline-block px-6 py-2 bg-primary-500 text-white text-sm font-medium rounded hover:bg-primary-600 transition-colors"
            >
              CONNECT
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-300">
          <p className="text-xs text-gray-600 text-center">
            © 2025 Ai Top Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}