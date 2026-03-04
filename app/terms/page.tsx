import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Ai TOP TECHNOLOGIES",
  description: "Terms of Service for Ai TOP TECHNOLOGIES",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-text mb-4">
              Last updated: January 2025
            </p>
            
            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              Agreement to Terms
            </h2>
            <p className="text-text mb-4">
              By accessing or using the services of Ai Top Technologies LLC, you agree to be bound by these Terms of Service.
            </p>
            
            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              Use of Services
            </h2>
            <p className="text-text mb-4">
              You agree to use our services only for lawful purposes and in accordance with these Terms.
            </p>
            
            <h2 className="text-2xl font-bold text-text mt-8 mb-4">
              Contact Information
            </h2>
            <p className="text-text mb-4">
              For questions about these Terms, please contact us at{" "}
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