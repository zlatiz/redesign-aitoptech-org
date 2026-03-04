import Link from 'next/link';

const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark-blue text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand and Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Ai TOP TECHNOLOGIES</h3>
            <p className="text-sm">Ai Top Technologies LLC</p>
            <p className="text-sm">Registered in Delaware, USA</p>
            <a href="mailto:info@aitoptech.org" className="text-sm mt-2 inline-block hover:text-brand-primary-blue transition-colors">
              info@aitoptech.org
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-brand-primary-blue transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: CTA */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Have a project in mind?</h3>
            <Link href="/contact" className="inline-block bg-brand-primary-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition-colors">
              CONNECT
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; 2025 Ai Top Technologies LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}