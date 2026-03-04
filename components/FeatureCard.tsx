interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  image?: string;
}

export default function FeatureCard({ icon, title, description, image }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg shadow-gray-200/50 hover:shadow-xl transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
          {icon}
        </div>
        
        {/* Optional Image */}
        {image && (
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gray-300 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-gray-300 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
            </div>
            <div className="w-10 h-10 rounded-lg bg-gray-300 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500" />
            </div>
          </div>
        )}
      </div>
      
      <h3 className="text-xl font-bold text-navy-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}