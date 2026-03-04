interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="text-center px-8 py-4">
      <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy-900 mb-2">
        {value}
      </div>
      <div className="text-gray-500 font-medium">
        {label}
      </div>
    </div>
  );
}