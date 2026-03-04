import HeroSection from "@/components/HeroSection";

export default function PrivacyPage() {
  return (
    <div id="page">
      {/* Hero Section */}
      <HeroSection title="Privacy Policy" showCta={false} />

      {/* Privacy Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: 2025
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 mb-8">
              We collect information you provide directly to us, such as when you contact us, request information about our services, or communicate with us via email.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-8">
              We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to respond to your inquiries.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-600 mb-8">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 mb-8">
              We implement appropriate technical and organizational measures to protect the security of your personal information.
            </p>

            <h2 className="text-2xl font-bold text-navy-900 mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <p className="text-gray-600">
              <strong>Ai Top Technologies LLC</strong><br />
              Registered in Delaware, USA<br />
              Email: <a href="mailto:info@aitoptech.org" className="text-primary-600 hover:text-primary-700">info@aitoptech.org</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}