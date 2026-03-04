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
        'brand-dark-blue': '#061532',
        'brand-primary-blue': '#375DFB',
        'brand-light-bg': '#F7F8FA',
        'brand-card-bg': '#FFFFFF',
        'brand-text-dark': '#1D232E',
        'brand-text-light': '#FFFFFF',
        'brand-text-secondary': '#5A6475',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.png')",
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      boxShadow: {
        'card': '0px 4px 20px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
};
export default config;