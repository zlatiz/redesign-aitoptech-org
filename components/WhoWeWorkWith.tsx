export default function WhoWeWorkWith() {
  const clients = [
    "Startups with complex infrastructure needs",
    "Agencies that need scalable backends",
    "Enterprises building new internal tools",
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Who we work with:</h2>
        <ul className="space-y-3">
          {clients.map((client, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
              {client}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}