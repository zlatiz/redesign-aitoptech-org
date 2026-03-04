export default function StatsSection() {
  const stats = [
    { value: "500+", label: "CLIENTS WORLDWIDE" },
    { value: "150+", label: "COMPLETED PROJECTS" },
    { value: "25+", label: "INNOVATIVE AI TOOLS" },
    { value: "98%", label: "CLIENT SATISFACTION RATE" },
  ];

  return (
    <section className="py-16 bg-stats-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
                {stat.value}
              </div>
              <p className="text-white/70 text-xs md:text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}