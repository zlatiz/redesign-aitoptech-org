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
        'primary': '#0D244F',
        'primary-light': '#1E40AF',
        'accent': '#3B82F6',
        'background': '#F7F8FA',
        'card': '#FFFFFF',
        'foreground': '#1F2937',
        'muted-foreground': '#6B7280',
      },
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
};
export default config;