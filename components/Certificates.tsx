"use client";

import { useEffect, useState } from "react";
import { certificates } from "@/lib/certificates";
import type { Certificate } from "@/lib/types";
import Panel from "./Panel";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const accents: Array<"cyan" | "amber" | "violet"> = ["cyan", "amber", "violet"];

export default function Certificates() {
  const [selected, setSelected] = useState<Certificate | null>(null);

  useEffect(() => {
    if (!selected) return;
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
          <button
            type="button"
            aria-label="Close"
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 w-10 h-10 rounded-md border border-line text-cyan font-mono hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
          >
            ×
          </button>
          <img
            src={selected.image}
            alt={selected.title}
            onClick={(e) => e.stopPropagation()}
            className="max-w-full max-h-full object-contain rounded border border-line shadow-glow"
          />
        </div>
      )}
    </section>
  );
}
