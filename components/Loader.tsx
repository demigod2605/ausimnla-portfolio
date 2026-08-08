"use client";

import { useEffect, useState } from "react";

const BOOT_LINES = [
  "> initializing ausimnla.sh",
  "> loading interface modules",
  "> compiling styles",
  "> establishing uplink",
  "> ready.",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHidden(true);
      return;
    }

    const interval = window.setInterval(() => {
      setProgress((p) => Math.min(p + Math.random() * 14, 100));
    }, 160);

    const timers: number[] = [];
    BOOT_LINES.forEach((line, i) => {
      timers.push(
        window.setTimeout(() => setLines((prev) => [...prev, line]), 320 * i + 200)
      );
    });

    const finish = window.setTimeout(() => {
      setProgress(100);
      window.clearInterval(interval);
    }, 1750);

    const fade = window.setTimeout(() => setDone(true), 2250);
    const unmount = window.setTimeout(() => setHidden(true), 2750);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(finish);
      window.clearTimeout(fade);
      window.clearTimeout(unmount);
      timers.forEach(window.clearTimeout);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] bg-void flex items-center justify-center transition-opacity duration-500 ${
        done ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-[min(90vw,420px)] rounded-md border border-line bg-panel/90 backdrop-blur p-6 shadow-glow">
        <div className="flex items-center justify-between mb-4">
          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
            ausimnla.sh
          </p>
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full bg-line" />
            <span className="w-2 h-2 rounded-full bg-line" />
            <span className="w-2 h-2 rounded-full bg-cyan/60" />
          </div>
        </div>

        <div className="min-h-[120px] font-mono text-xs leading-relaxed mb-5">
          {lines.map((line) => (
            <p
              key={line}
              className={line === "> ready." ? "text-cyan" : "text-muted"}
            >
              {line}
            </p>
          ))}
          {!done && (
            <p className="text-cyan">
              <span className="animate-pulse2">▊</span>
            </p>
          )}
        </div>

        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 rounded-full bg-panel2 border border-line overflow-hidden">
            <div
              className="h-full bg-cyan shadow-glow-sm transition-[width] duration-200 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="font-mono text-xs text-cyan w-9 text-right">
            {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  );
}
