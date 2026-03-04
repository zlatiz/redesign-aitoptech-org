import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'bg-brand-primary-blue text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}