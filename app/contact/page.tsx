import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-muted-foreground mb-8">
        This is a placeholder page for Contact.
      </p>
      <Link href="/about" className="text-accent hover:underline">
        Go back to About page
      </Link>
    </div>
  );
}