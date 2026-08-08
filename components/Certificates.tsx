"use client";

import { useEffect, useState } from "react";
import { certificates } from "@/lib/certificates";
import type { Certificate } from "@/lib/types";
import Panel from "./Panel";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const accents: Array<"cyan" | "amber" | "violet"> = ["cyan", "amber", "violet"];

const MIN_SCALE = 1;
const MAX_SCALE = 5;

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);
  const [scale, setScale] = useState(MIN_SCALE);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!selected) return;
    setScale(MIN_SCALE);
    setPos({ x: 0, y: 0 });
    setOrigin({ x: 50, y: 50 });
    setDragging(false);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  function zoomBy(delta: number) {
    setScale((s) => Math.min(Math.max(s + delta, MIN_SCALE), MAX_SCALE));
  }

  function handleWheel(e: React.WheelEvent) {
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin({ x, y });
    setScale((s) =>
      Math.min(Math.max(s - e.deltaY * 0.002, MIN_SCALE), MAX_SCALE)
    );
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (scale <= MIN_SCALE) return;
    setDragging(true);
    setStart({ x: e.clientX, y: e.clientY });
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!dragging) return;
    setPos((p) => ({
      x: p.x + e.clientX - start.x,
      y: p.y + e.clientY - start.y,
    }));
    setStart({ x: e.clientX, y: e.clientY });
  }

  function handlePointerUp() {
    setDragging(false);
  }

  function resetZoom() {
    setScale(MIN_SCALE);
    setPos({ x: 0, y: 0 });
    setOrigin({ x: 50, y: 50 });
  }

  return (
    <section id="certificates" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 05 — certificates
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        Credentials
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 items-start">
        {certificates.map((cert, i) => {
          const accent = accents[i % accents.length];
          const accentText =
            accent === "cyan"
              ? "text-cyan"
              : accent === "amber"
                ? "text-amber"
                : "text-violet";
          return (
            <Reveal key={cert.id} delay={(i % 2) * 120}>
              <Tilt>
                <Panel
                  accent={accent}
                  label={`cert_${String(i + 1).padStart(2, "0")}`}
                  className="p-6"
                >
                  <div className="relative mb-4 group">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      onClick={() => setSelected(cert)}
                      className="w-full rounded border border-line object-cover cursor-zoom-in hover:opacity-90 hover:shadow-glow-sm transition-all"
                    />
                    <span className="absolute bottom-2 right-2 font-mono text-[10px] uppercase tracking-widest text-void bg-cyan/80 rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      click to zoom
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-text">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                  <p className={`font-mono text-xs mt-1 ${accentText}`}>
                    {cert.year}
                  </p>
                </Panel>
              </Tilt>
            </Reveal>
          );
        })}
      </div>

      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[200] bg-void/95 backdrop-blur flex items-center justify-center p-4 sm:p-10"
        >
          <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-xs">
            <button
              type="button"
              aria-label="Zoom out"
              onClick={(e) => {
                e.stopPropagation();
                zoomBy(-0.5);
              }}
              className="w-10 h-10 rounded-md border border-line text-cyan hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
            >
              −
            </button>
            <button
              type="button"
              aria-label="Reset zoom"
              onClick={(e) => {
                e.stopPropagation();
                resetZoom();
              }}
              className="h-10 px-3 rounded-md border border-line text-cyan font-mono text-xs hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
            >
              {Math.round(scale * 100)}%
            </button>
            <button
              type="button"
              aria-label="Zoom in"
              onClick={(e) => {
                e.stopPropagation();
                zoomBy(0.5);
              }}
              className="w-10 h-10 rounded-md border border-line text-cyan hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
            >
              +
            </button>
          </div>

          <button
            type="button"
            aria-label="Close"
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-md border border-line text-cyan font-mono hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
          >
            ×
          </button>

          <div
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-center max-w-full max-h-full overflow-hidden touch-none select-none"
            style={{ cursor: dragging ? "grabbing" : scale > 1 ? "zoom-out" : "zoom-in" }}
          >
            <img
              src={selected.image}
              alt={selected.title}
              draggable={false}
              className="max-w-full max-h-full object-contain rounded border border-line shadow-glow"
              style={{
                transform: `scale(${scale}) translate(${pos.x}px, ${pos.y}px)`,
                transformOrigin: `${origin.x}% ${origin.y}%`,
                transition: dragging ? "none" : "transform 0.12s ease-out",
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
