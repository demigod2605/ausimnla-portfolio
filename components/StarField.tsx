"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  base: number;
  speed: number;
  phase: number;
  hue: string;
};

export default function StarField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g = ctx;
    const el = canvas;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const hues = [
      "255,255,255",
      "255,255,255",
      "122,162,255",
      "187,134,252",
      "255,213,128",
    ];

    let raf = 0;
    let stars: Star[] = [];
    let t = 0;

    function resize() {
      const { innerWidth, innerHeight } = window;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = innerWidth * dpr;
      el.height = innerHeight * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      el.style.width = `${innerWidth}px`;
      el.style.height = `${innerHeight}px`;

      const count = Math.floor((innerWidth * innerHeight) / 9000);
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * innerWidth,
        y: Math.random() * innerHeight,
        r: Math.random() * 1.4 + 0.4,
        base: Math.random() * 0.5 + 0.4,
        speed: Math.random() * 0.02 + 0.005,
        phase: Math.random() * Math.PI * 2,
        hue: hues[Math.floor(Math.random() * hues.length)],
      }));
    }

    function draw() {
      g.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const star of stars) {
        const twinkle = reduced
          ? 1
          : star.base + Math.sin(t * star.speed * 60 + star.phase) * 0.35;
        g.beginPath();
        g.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        g.fillStyle = `rgba(${star.hue},${Math.max(0.15, twinkle)})`;
        g.fill();
      }
      t += 1;
      if (!reduced) raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
