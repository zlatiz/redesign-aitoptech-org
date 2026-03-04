import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ai TOP TECHNOLOGIES",
  description: "Privacy Policy for Ai TOP TECHNOLOGIES",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-text mb-4">
              Last updated: January 2025
            </p>
            
            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              Information We Collect
            </h2>
            <p className="text-text mb-4">
              Ai Top Technologies LLC is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your information.
            </p>
            
            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-text mb-4">
              We use the information we collect to provide and improve our services, communicate with you, and ensure the security of our platform.
            </p>
            
            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              Contact Us
            </h2>
            <p className="text-text mb-4">
              If you have any questions about this Privacy Policy, please contact us at{" "}
              <a href="mailto:info@aitoptech.org" className="text-accent-green hover:underline">
                info@aitoptech.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}