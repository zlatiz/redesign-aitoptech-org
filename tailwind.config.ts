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
          DEFAULT: "#209d50",
          dark: "#13aa4d",
        },
        background: {
          DEFAULT: "rgb(225, 223, 217)",
          light: "#ffffff",
        },
        text: {
          DEFAULT: "rgb(29, 35, 28)",
          light: "rgb(255, 255, 255)",
        },
        accent: {
          green: "rgb(32, 157, 80)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};
export default config;