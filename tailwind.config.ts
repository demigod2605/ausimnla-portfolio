import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#05070B",
        panel: "#0A0E14",
        panel2: "#0F151D",
        line: "#1C2733",
        text: "#E6EEF2",
        muted: "#5C7080",
        cyan: "#5EEAD4",
        amber: "#FFB84C",
        violet: "#9B8CFF",
        danger: "#FF6B6B",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(94,234,212,0.25), 0 0 24px -4px rgba(94,234,212,0.35)",
        "glow-sm": "0 0 0 1px rgba(94,234,212,0.2), 0 0 12px -4px rgba(94,234,212,0.3)",
        "glow-amber": "0 0 0 1px rgba(255,184,76,0.25), 0 0 24px -4px rgba(255,184,76,0.35)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        pulse2: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.4" },
        },
      },
      animation: {
        marquee: "marquee 26s linear infinite",
        scan: "scan 6s ease-in-out infinite",
        pulse2: "pulse2 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
