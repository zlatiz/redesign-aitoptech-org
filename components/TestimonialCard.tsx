interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export default function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-purple-900 to-blue-900 text-white p-8 rounded-xl shadow-lg">
      <div className="mb-6">
        <svg
          className="w-10 h-10 text-blue-400 opacity-50"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-lg mb-6 leading-relaxed">{quote}</p>
      <div>
        <p className="font-bold">{author}</p>
        <p className="text-blue-200 text-sm">{role}</p>
      </div>
    </div>
  );
}
