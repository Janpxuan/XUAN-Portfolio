import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        muted: "#64748b",
        soft: "#f7faff",
        accent: "#4f7cff",
        violet: "#8b5cf6",
      },
      boxShadow: {
        glass: "0 24px 80px rgba(79, 124, 255, 0.14)",
        card: "0 18px 50px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        glass: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
