import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1F3A",
        ink: "#1F2937",
        muted: "#5B6573",
        brand: "#1769AA",
        teal: "#0F766E",
        "teal-dark": "#0B5F59",
        gold: "#D89B2B",
        soft: "#F6F8FB",
        line: "#E8EEF5",
        footer: "#07182D",
        success: "#15803D",
        warning: "#B45309",
        error: "#B91C1C",
        whatsapp: "#25D366",
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["Manrope", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(11, 31, 58, 0.08)",
        card: "0 12px 32px rgba(11, 31, 58, 0.06)",
      },
      borderRadius: {
        card: "0.75rem",
      },
    },
  },
  plugins: [],
};

export default config;
