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
          DEFAULT: "rgb(32, 157, 80)",
          dark: "rgb(28, 137, 70)",
        },
        background: {
          DEFAULT: "rgb(225, 223, 217)",
          light: "rgb(255, 255, 255)",
        },
        text: {
          DEFAULT: "rgb(29, 35, 28)",
          light: "rgb(255, 255, 255)",
        },
        hero: {
          DEFAULT: "rgb(30, 50, 45)",
        },
      },
      fontFamily: {
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
    },
  },
  plugins: [],
};
export default config;