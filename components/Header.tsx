"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-background border-b border-gray-200">
      <div className="container-custom py-4 md:py-5">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
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
            <span className="text-sm md:text-base font-semibold text-text">
              Ai TOP TECHNOLOGIES
            </span>
          </Link>

          <ul className="flex items-center gap-6 md:gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`text-sm md:text-base transition-colors ${
                    pathname === item.href
                      ? "text-accent-green font-medium"
                      : "text-text hover:text-accent-green"
                  }`}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}