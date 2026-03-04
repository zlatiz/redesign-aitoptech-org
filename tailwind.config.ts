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
        primary: "#18a54e",
        "background-light": "#e1dfd9",
        "background-dark": "#112117",
        "text-primary": "#0f1a14",
        "text-secondary": "#4a6254",
        "hero-overlay": "#112117",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)"],
      },
    },
  },
  plugins: [],
};

export default config;