import Button from "@/components/ui/Button";
import TargetIcon from "@/components/icons/TargetIcon";
import LightbulbIcon from "@/components/icons/LightbulbIcon";
import BriefcaseIcon from "@/components/icons/BriefcaseIcon";

const valueCards = [
  {
    icon: <TargetIcon />,
    text: "Simplicity over noise",
  },
  {
    icon: <LightbulbIcon />,
    text: "Ethics before hype",
  },
  {
    icon: <BriefcaseIcon />,
    text: "Execution that scales",
  },
];

const stats = [
  {
    value: "100+",
    label: "CLIENTS SERVED",
  },
  {
    value: "50+",
    label: "INNOVATIVE SOLUTIONS",
  },
  {
    value: "10+",
    label: "YEARS EXPERIENCE",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-brand-dark-blue bg-hero-pattern bg-cover bg-center text-brand-text-light">
        <div className="absolute inset-0 bg-brand-dark-blue opacity-80"></div>
        <div className="relative container mx-auto px-6 py-32 md:py-48 text-left">
          <h1 className="text-5xl md:text-7xl font-bold max-w-3xl leading-tight">
            About — Ai TOP TECHNOLOGIES
          </h1>
          <div className="mt-8">
            <Button>Primary call-to-action</Button>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-card-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueCards.map((card, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-card border border-gray-100 flex flex-col items-start text-left">
                <div className="bg-blue-100 p-3 rounded-full mb-6">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-text-dark">
                  {card.text}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-brand-light-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <p className="text-6xl font-bold text-brand-dark-blue">{stat.value}</p>
                <p className="mt-2 text-sm font-semibold text-brand-text-secondary tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Remaining Content Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-left">
          <h2 className="text-3xl font-bold text-brand-text-dark mb-4">About AI Top Technologies</h2>
          <p className="text-brand-text-secondary leading-relaxed mb-8">
            Founded by a cross-functional team of engineers, advisors, and project managers, AiTT supports mission-driven ventures through the full technology lifecycle — from architecture and compliance to AI integration and deployment.
          </p>
          
          <h3 className="text-2xl font-bold text-brand-text-dark mt-12 mb-4">Who we work with:</h3>
          <ul className="list-disc list-inside space-y-2 text-brand-text-secondary">
            <li>Startups with complex infrastructure needs</li>
            <li>Agencies that need scalable backends</li>
            <li>Enterprises building new internal tools</li>
          </ul>
        </div>
      </section>
    </>
  );
}