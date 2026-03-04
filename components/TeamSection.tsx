const teamMembers = [
  {
    name: "Dr. Evelyn Reed",
    role: "CEO",
    color: "from-primary-400 to-primary-600",
  },
  {
    name: "Mark Johnson",
    role: "CTO",
    color: "from-accent-cyan to-accent-teal",
  },
  {
    name: "Anya Sharma",
    role: "Head of AI Research",
    color: "from-purple-400 to-purple-600",
  },
  {
    name: "Liam O'Connor",
    role: "Lead Software Architect",
    color: "from-orange-400 to-orange-600",
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
            MEET OUR INNOVATION LEADERS
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="card p-6 text-center group hover:-translate-y-2 transition-all duration-300"
            >
              {/* Avatar */}
              <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center shadow-lg`}>
                <span className="text-white text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              
              <h3 className="text-lg font-bold text-text-primary mb-1">
                {member.name}
              </h3>
              <p className="text-text-muted text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}