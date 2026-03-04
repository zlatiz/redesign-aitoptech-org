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
    <header className="bg-navy-900 text-white py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary-400">A</span>
            <span className="text-2xl font-bold text-white">i</span>
            <span className="text-2xl font-bold text-primary-400">T</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-xs font-semibold tracking-wide">AI TOP</span>
            <span className="text-xs font-semibold tracking-wide">TECHNOLOGIES</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <span className="text-gray-400 text-sm mr-4">Skip to Content</span>
          <span className="text-gray-400 text-sm mr-4">Ai TOP TECHNOLOGIES</span>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                pathname === item.href
                  ? "text-white border-b-2 border-primary-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {item.text}
            </Link>
          ))}
        </nav>

        <nav className="flex md:hidden items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium ${
                pathname === item.href ? "text-white" : "text-gray-300"
              }`}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}