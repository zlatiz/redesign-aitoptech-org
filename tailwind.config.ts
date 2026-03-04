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
          50: '#e8f5ee',
          100: '#c2e4d1',
          200: '#9ad3b4',
          300: '#72c297',
          400: '#4ab17a',
          500: '#209d50',
          600: '#1a7d40',
          700: '#155e30',
          800: '#0f3e20',
          900: '#0a1f10',
        },
        background: {
          light: '#e1dfd9',
          dark: '#1d231c',
        },
        hero: {
          DEFAULT: '#1a3a2e',
          light: '#234a3c',
        }
      },
      fontFamily: {
        sans: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'DEFAULT': '8px',
      },
    },
  },
  plugins: [],
};

export default config;