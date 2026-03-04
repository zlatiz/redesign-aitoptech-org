import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="py-16 px-6 bg-primary-600 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Have a project in mind?</h2>
        <p className="text-lg text-primary-100 mb-8">
          Ai Top Technologies LLC<br />
          Registered in Delaware, USA
        </p>
        <p className="text-primary-100 mb-8">info@aitoptech.org</p>
        <Link
          href="/contact"
          className="inline-block bg-white text-primary-600 font-semibold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors"
        >
          CONNECT
        </Link>
      </div>
    </section>
  );
}