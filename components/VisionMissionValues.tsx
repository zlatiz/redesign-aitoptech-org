const VisionIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const MissionIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const ValuesIcon = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function VisionMissionValues() {
  const items = [
    {
      icon: <VisionIcon />,
      title: "Our Vision",
      description: "To lead the global transition towards an AI-empowered future, creating sustainable and intelligent systems that benefit humanity and industry alike."
    },
    {
      icon: <MissionIcon />,
      title: "Our Mission",
      description: "To empower organizations with innovative and reliable AI technologies, fostering growth and efficiency through tailored, state-of-the-art solutions."
    },
    {
      icon: <ValuesIcon />,
      title: "Our Core Values",
      description: "Integrity, Innovation, Collaboration, and Excellence guide everything we do, from research and development to client partnerships."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="card p-8 text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-primary-100 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {item.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}