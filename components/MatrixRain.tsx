"use client";

import { useEffect, useRef } from "react";

const CHARS =
  "アカサタナハマヤラワ0123456789ABCDEFアイウエオカキクケコサシスセソ01";

export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const g = ctx;
    const el = canvas;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let drops: number[] = [];
    let fontSize = 16;
    let cols = 0;

    function resize() {
      const { innerWidth, innerHeight } = window;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      el.width = innerWidth * dpr;
      el.height = innerHeight * dpr;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      el.style.width = `${innerWidth}px`;
      el.style.height = `${innerHeight}px`;
      cols = Math.floor(innerWidth / fontSize);
      drops = Array.from({ length: cols }, () => Math.random() * -100);
      g.fillStyle = "rgba(0, 5, 3, 1)";
      g.fillRect(0, 0, innerWidth, innerHeight);
    }

    function draw() {
      g.fillStyle = "rgba(0, 5, 3, 0.06)";
      g.fillRect(0, 0, window.innerWidth, window.innerHeight);
      g.font = `${fontSize}px monospace`;
      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        g.fillStyle = "#00FF41";
        g.fillText(char, x, y);
        if (y > window.innerHeight && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduced) {
      draw();
      cancelAnimationFrame(raf);
    } else {
      draw();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="fixed inset-0 -z-10 opacity-25 pointer-events-none"
    />
  );
}
