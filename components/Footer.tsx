import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Contact
          </Link>
          <Link 
            href="/services" 
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/portfolio" 
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Portfolio
          </Link>
          <Link 
            href="/privacy" 
            className="text-gray-600 hover:text-primary-600 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 AI TOP TECHNOLOGIES. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}