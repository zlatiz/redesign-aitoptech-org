import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-gray-900 mb-4">COMPANY</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-gray-600 hover:text-primary-600 text-sm">
                Home
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-primary-600 text-sm">
                About
              </Link>
              <Link href="/services" className="text-gray-600 hover:text-primary-600 text-sm">
                Services
              </Link>
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">EXPLORE</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/blog" className="text-gray-600 hover:text-primary-600 text-sm">
                Blog
              </Link>
              <Link href="/whitepapers" className="text-gray-600 hover:text-primary-600 text-sm">
                Whitepapers
              </Link>
              <Link href="/case-studies" className="text-gray-600 hover:text-primary-600 text-sm">
                Case Studies
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 mb-4">LEGAL LINKS</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/contact" className="text-gray-600 hover:text-primary-600 text-sm">
                Contact Links
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            © 2025 Ai Top Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}