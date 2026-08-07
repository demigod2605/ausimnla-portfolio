"use client";

import { useRef, useState } from "react";
import type { Project } from "@/lib/types";
import Panel from "./Panel";

function ImageScroller({
  images,
  imgClass,
}: {
  images: { src: string; alt: string }[];
  imgClass: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function scroll(direction: 1 | -1) {
    ref.current?.scrollBy({ left: direction * 280, behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x scroll-smooth"
      >
        {images.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            className={`object-cover object-top rounded border border-line shrink-0 snap-start ${imgClass}`}
          />
        ))}
      </div>
      <button
        type="button"
        aria-label="Previous screenshots"
        onClick={(e) => {
          e.stopPropagation();
          scroll(-1);
        }}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-line bg-void/80 text-cyan hover:bg-cyan hover:text-void transition-colors"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next screenshots"
        onClick={(e) => {
          e.stopPropagation();
          scroll(1);
        }}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-line bg-void/80 text-cyan hover:bg-cyan hover:text-void transition-colors"
      >
        ›
      </button>
    </div>
  );
}

export default function ProjectCard({
  project,
  accent,
  accentText,
  label,
}: {
  project: Project;
  accent: "cyan" | "amber" | "violet";
  accentText: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((v) => !v);
  }

  return (
    <div
      role="button"
      tabIndex={0}
      aria-expanded={open}
      aria-label={
        open ? `Collapse ${project.title} details` : `Expand ${project.title} details`
      }
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className="cursor-pointer"
    >
      <Panel
        as="article"
        accent={accent}
        label={label}
        className="p-6 flex flex-col gap-4"
      >
        <h3 className="font-display font-bold text-xl text-text">{project.title}</h3>

        {!open && (
          <>
            {project.images && project.images.length > 0 && (
              <ImageScroller
                images={project.images}
                imgClass="w-64 h-40"
              />
            )}

            <p className="text-sm leading-relaxed text-muted line-clamp-2">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs font-mono px-2 py-1 rounded border border-line ${accentText}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </>
        )}

        {open && (
          <div className="expand-in grid sm:grid-cols-2 gap-6">
            {project.images && project.images.length > 0 && (
              <ImageScroller
                images={project.images}
                imgClass="w-full h-72"
              />
            )}

            <div className="flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-mono px-2 py-1 rounded border border-line ${accentText}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.highlights && project.highlights.length > 0 && (
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted mb-3">
                    // what it does
                  </p>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 text-sm text-muted leading-relaxed"
                      >
                        <span className={accentText}>▸</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between font-mono text-xs">
          <span className="text-muted/70">
            {open ? "// click to collapse" : "// click to expand"}
          </span>
          <span className={accentText}>{open ? "▴" : "▾"}</span>
        </div>
      </Panel>
    </div>
  );
}
