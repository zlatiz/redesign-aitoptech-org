import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import VisionMissionValues from "@/components/VisionMissionValues";
import CompanyInfo from "@/components/CompanyInfo";
import StatsSection from "@/components/StatsSection";
import TeamSection from "@/components/TeamSection";
import CTASection from "@/components/CTASection";

export default function Home() {
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