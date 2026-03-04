export default function ValuesSection() {
  const values = [
    "Simplicity over noise",
    "Ethics before hype",
    "Execution that scales",
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Values:</h2>
        <ul className="space-y-3">
          {values.map((value, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}