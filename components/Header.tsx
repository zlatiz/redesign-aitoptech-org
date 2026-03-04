'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/about', text: 'About' },
  { href: '/contact', text: 'Contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-brand-dark-blue text-brand-text-light absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold flex items-center">
          <span className="bg-white text-brand-dark-blue font-extrabold text-2xl px-2 py-1 rounded-md mr-2">Ai</span>
          <span className="font-semibold tracking-wider">AI TOP TECHNOLOGIES</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                'text-white hover:text-gray-300 transition-colors relative after:content-[\'\'] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full after:bg-brand-primary-blue after:transition-transform after:duration-300',
                {
                  'after:scale-x-100': pathname === link.href,
                  'after:scale-x-0 hover:after:scale-x-100': pathname !== link.href,
                }
              )}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark-blue pb-4">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={clsx('text-lg', { 'text-brand-primary-blue font-bold': pathname === link.href, 'text-white': pathname !== link.href })}
              >
                {link.text}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}