interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: 'light' | 'dark';
}

export default function FeatureCard({
  icon,
  title,
  description,
  variant = 'light'
}: FeatureCardProps) {
  return (
    <div
      className={`p-8 rounded-xl shadow-lg transition-transform hover:scale-105 ${
        variant === 'dark'
          ? 'bg-gradient-to-br from-purple-900 to-blue-900 text-white'
          : 'bg-white'
      }`}
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className={variant === 'dark' ? 'text-blue-100' : 'text-gray-600'}>
        {description}
      </p>
    </div>
  );
}
