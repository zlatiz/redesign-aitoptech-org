import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        navy: {
          800: '#1E293B',
          900: '#0F172A',
          950: '#020617',
        },
        accent: {
          blue: '#0EA5E9',
          cyan: '#22D3EE',
          teal: '#14B8A6',
        },
        surface: {
          light: '#F8FAFC',
          white: '#FFFFFF',
          muted: '#F1F5F9',
        },
        text: {
          primary: '#1D231C',
          secondary: '#475569',
          muted: '#64748B',
          light: '#94A3B8',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F172A 100%)',
        'stats-gradient': 'linear-gradient(90deg, #1E3A8A 0%, #1E40AF 100%)',
        'card-gradient': 'linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
        'stats': '0 -4px 20px rgba(30, 58, 138, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;