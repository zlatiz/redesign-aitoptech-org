import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import StatsSection from "@/components/StatsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactCTA from "@/components/ContactCTA";

export const metadata = {
  title: "About — Ai TOP TECHNOLOGIES",
  description: "About AI Top Technologies - Founded by a cross-functional team of engineers, advisors, and project managers",
};

export default function AboutPage() {
  return (
    <>
      <Hero />
      
      {/* About Content Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About AI Top Technologies</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Who we work with:</h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
              Startups with complex infrastructure needs
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
              Agencies that need scalable backends
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
              Enterprises building new internal tools
            </li>
          </ul>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values:</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
              Simplicity over noise
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
              Ethics before hype
            </li>
            <li className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></span>
              Execution that scales
            </li>
          </ul>
        </div>
      </section>

      <VisionSection />
      <StatsSection />
      <LeadershipSection />
      <ContactCTA />
    </>
  );
}