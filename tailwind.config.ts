import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#04050F",
        panel: "#0A0D1E",
        panel2: "#101632",
        line: "#232B4D",
        text: "#E8EDFF",
        muted: "#8FA0CC",
        cyan: "#7AA2FF",
        amber: "#FFD580",
        violet: "#BB86FC",
        danger: "#FF6B9D",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-jakarta)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(122,162,255,0.25), 0 0 24px -4px rgba(122,162,255,0.4)",
        "glow-sm": "0 0 0 1px rgba(122,162,255,0.2), 0 0 12px -4px rgba(122,162,255,0.35)",
        "glow-amber": "0 0 0 1px rgba(255,213,128,0.25), 0 0 24px -4px rgba(255,213,128,0.4)",
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
