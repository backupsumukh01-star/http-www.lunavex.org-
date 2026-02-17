import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0B0F1A",
        card: "#11162A",
        primary: "var(--accent)",
        secondary: "#4DA3FF",
        text: "#E6E8F0",
        muted: "#9AA0B5",
        border: "#1E2440",
      },
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
