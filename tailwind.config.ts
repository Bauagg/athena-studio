import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        "brand-foreground": "var(--brand-foreground)",
      },
      animation: {
        "fade-in": "fade-in 180ms ease-out",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(-4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
};

export default config;
