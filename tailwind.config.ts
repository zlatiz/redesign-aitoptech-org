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
        background: "#e1dfd9",
        foreground: "#1d231c",
        primary: {
          DEFAULT: "#18a54e",
          50: "#e8f7ee",
          100: "#c5ebd7",
          200: "#9fdebe",
          300: "#79d1a5",
          400: "#5cc692",
          500: "#3fbb7f",
          600: "#35a56e",
          700: "#2a8c5a",
          800: "#1f7447",
          900: "#145c34",
        },
        accent: "#209d50",
        muted: {
          DEFAULT: "#6b7268",
          foreground: "#4a4f47",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};

export default config;