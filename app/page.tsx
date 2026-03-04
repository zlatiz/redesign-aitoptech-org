import Hero from "@/components/Hero";
import VisionSection from "@/components/VisionSection";
import StatsSection from "@/components/StatsSection";
import LeadershipSection from "@/components/LeadershipSection";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionSection />
      <StatsSection />
      <LeadershipSection />
      <ContactCTA />
    </>
  );
}