import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        portfolio: {
          bg: "#11172a",
          body: "#a3aebf",
          accent: "#599692",
          bright: "#dfe5ec",
          surface: "#1a2238",
          raised: "#232f4a",
          "accent-deep": "#457a77",
        },
      },
      animation: {
        carousel: "carousel 20s linear infinite",
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
