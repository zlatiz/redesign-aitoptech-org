interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow">
      <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mb-6">
        <div className="text-primary-500">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-background-dark mb-3">
        {title}
      </h3>
      <p className="text-sm text-gray-700 leading-relaxed">
        {description}
      </p>
    </div>
  );
}