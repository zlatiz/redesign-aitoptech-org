import { VisionIcon } from "@/components/icons/VisionIcon";
import { AnalyticsIcon } from "@/components/icons/AnalyticsIcon";
import { AutomationIcon } from "@/components/icons/AutomationIcon";
import { MachineLearningIcon } from "@/components/icons/MachineLearningIcon";
import Image from "next/image";
import Link from "next/link";

const whoWeWorkWith = [
  {
    title: "Startups",
    description: "Startups with complex infrastructure needs",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Agencies",
    description: "Agencies that need scalable backends",
    icon: <AutomationIcon />,
  },
  {
    title: "Enterprises",
    description: "Enterprises building new internal tools",
    icon: <MachineLearningIcon />,
  },
];

const ourValues = [
  {
    title: "Simplicity",
    description: "Simplicity over noise",
    icon: <AnalyticsIcon />,
  },
  {
    title: "Ethics",
    description: "Ethics before hype",
    icon: <AutomationIcon />,
  },
  {
    title: "Execution",
    description: "Execution that scales",
    icon: <MachineLearningIcon />,
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-24 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary via-primary to-primary-light opacity-90"></div>
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-blue-400/20 rounded-full filter blur-3xl opacity-50"></div>
        <div className="absolute -bottom-20 -right-40 w-96 h-96 bg-indigo-400/20 rounded-full filter blur-3xl opacity-50"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              About — Ai TOP TECHNOLOGIES
            </h1>
            <div className="mt-8">
              <Link href="/contact" className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Innovation Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-accent"><VisionIcon /></div>
                <h2 className="text-3xl font-bold text-foreground">About AI Top Technologies</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.
              </p>
            </div>
            <div className="md:w-1/2 w-full">
              <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                <Image src="/placeholder.svg" alt="AI Technology Visualization" width={100} height={100} className="opacity-50" />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-2">AI Technology Visualization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities Sections */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6 space-y-12">
          {/* Who We Work With */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Who we work with:</h2>
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
              <div className="md:w-1/2 w-full">
                <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="Capabilities Visualization" width={100} height={100} className="opacity-50" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                {whoWeWorkWith.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-accent mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{item.description}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-foreground mb-8">Our Values:</h2>
            <div className="flex flex-col md:flex-row-reverse items-start gap-8 md:gap-12">
              <div className="md:w-1/2 w-full">
                <div className="bg-gray-200 rounded-xl aspect-video flex items-center justify-center">
                  <Image src="/placeholder.svg" alt="Values Visualization" width={100} height={100} className="opacity-50" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-6">
                {ourValues.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-accent mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground">{item.description}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}