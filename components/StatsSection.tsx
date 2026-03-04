export default function StatsSection() {
  const stats = [
    {
      number: "10+",
      label: "YEARS EXPERIENCE",
      description: "Empowering all businesses with cutting-edge AI solutions.",
    },
    {
      number: "250+",
      label: "CLIENTS WORLDWIDE",
      description: "Clients worldwide to raer-in our ceolomes.",
    },
    {
      number: "50+",
      label: "AI INNOVATIONS",
      description: "AI innovations for in-nova-thonent cutting-edge AI solutions.",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-6xl md:text-7xl font-bold text-primary-600 mb-2">
                {stat.number}
              </span>
              <span className="text-sm font-bold text-primary-600 tracking-wider mb-3">
                {stat.label}
              </span>
              <p className="text-gray-500 text-sm max-w-xs">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}