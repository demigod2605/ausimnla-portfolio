import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#000503",
        panel: "#020D08",
        panel2: "#031510",
        line: "#0A3B22",
        text: "#C9FFE0",
        muted: "#4E8F6D",
        cyan: "#00FF41",
        amber: "#66FF99",
        violet: "#00CC66",
        danger: "#FF3B3B",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(0,255,65,0.25), 0 0 24px -4px rgba(0,255,65,0.4)",
        "glow-sm": "0 0 0 1px rgba(0,255,65,0.2), 0 0 12px -4px rgba(0,255,65,0.35)",
        "glow-amber": "0 0 0 1px rgba(102,255,153,0.25), 0 0 24px -4px rgba(102,255,153,0.4)",
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
