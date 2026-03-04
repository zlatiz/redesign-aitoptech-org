"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center transform transition-transform group-hover:scale-110">
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
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors relative ${
                  pathname === link.href
                    ? "text-primary"
                    : "text-text hover:text-primary"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                )}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}