import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Ai Top Technologies LLC</h3>
            <p className="text-background/80 text-sm">Registered in Delaware, USA</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <a 
              href="mailto:info@aitoptech.org"
              className="text-background/80 hover:text-primary transition-colors text-sm"
            >
              info@aitoptech.org
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Have a project in mind?</h4>
            <Link
              href="/contact"
              className="inline-block bg-primary hover:bg-primary-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 text-sm"
            >
              CONNECT
            </Link>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8">
          <p className="text-background/60 text-sm text-center">
            © 2025 Ai Top Technologies LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}