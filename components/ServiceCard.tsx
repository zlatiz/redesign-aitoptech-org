interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-accent-green">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold text-text mb-3">
        {title}
      </h3>
      <p className="text-sm md:text-base text-text leading-relaxed">
        {description}
      </p>
    </div>
  );
}