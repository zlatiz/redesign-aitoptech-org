import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-8 px-8 lg:px-40 py-12 mt-12 border-t border-solid border-primary/20 text-center">
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link
            href="/"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium leading-normal tracking-wide uppercase"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium leading-normal tracking-wide uppercase"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-text-secondary hover:text-primary transition-colors text-sm font-medium leading-normal tracking-wide uppercase"
          >
            Contact
          </Link>
        </div>
        <p className="text-text-secondary/70 text-sm font-light leading-normal mt-8">
          © 2025 Ai Top Technologies LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}