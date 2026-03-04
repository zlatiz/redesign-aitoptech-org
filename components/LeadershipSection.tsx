export default function LeadershipSection() {
  const leaders = [
    {
      name: "Jane Doe",
      role: "CEO",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, and evaluned temporie-msamaning business with amos.",
      image: "/team/jane-doe.jpg",
    },
    {
      name: "John Smith",
      role: "CTO",
      description: "John Smith is a goon-evauratied businesses, cutting-edge AI solutions. Provide madiimat busineser computenencomsgnu amet.",
      image: "/team/john-smith.jpg",
    },
    {
      name: "John Smith",
      role: "Aviitor",
      description: "John Smith is a great bition of consectetur adipicicing elit, and solutions tin-esand madenso: Hairluce computer consgna amet.",
      image: "/team/john-smith-2.jpg",
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Our Leadership Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 text-center shadow-sm"
            >
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center overflow-hidden">
                <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
              <p className="text-primary-600 text-sm font-medium mb-4">{leader.role}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}