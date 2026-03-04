import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionValues from "@/components/VisionMissionValues";
import CompanyInfo from "@/components/CompanyInfo";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "About — Ai TOP TECHNOLOGIES",
  description: "Learn about Ai Top Technologies - our mission, vision, and the team behind our innovative AI solutions.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionMissionValues />
      <CompanyInfo />
      <StatsSection />
      <TeamSection />
      <CTASection />
    </>
  );
}