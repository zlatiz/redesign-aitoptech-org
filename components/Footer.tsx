import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* Pre-footer CTA */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">Have a project in mind?</h2>
          <Link href="/contact" className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-light transition-colors">
            CONNECT
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <footer className="bg-gray-100 text-muted-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-accent">About</Link></li>
                <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
                <li><a href="mailto:info@aitoptech.org" className="hover:text-accent">info@aitoptech.org</a></li>
                <li className="text-sm pt-2">Ai Top Technologies LLC<br/>Registered in Delaware, USA</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Products</h3>
              {/* Content not available in JSON */}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Resources</h3>
              {/* Content not available in JSON */}
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              {/* Content not available in JSON */}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-6 py-6 text-center text-sm">
            <p>© 2025 Ai Top Technologies LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}