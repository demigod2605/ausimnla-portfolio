"use client";

import { useState } from "react";
import type { Project } from "@/lib/types";
import Panel from "./Panel";

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

        {project.images && project.images.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
            {project.images.map((image) => (
              <img
                key={image.src}
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-40 h-28 object-cover object-top rounded border border-line shrink-0 snap-start"
              />
            ))}
          </div>
        )}

        <p className={`text-sm leading-relaxed text-muted ${open ? "" : "line-clamp-2"}`}>
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

        {open && (
          <div className="expand-in flex flex-col gap-5 border-t border-line pt-4">
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

            {(project.repo_url || project.demo_url) && (
              <div className="flex flex-wrap gap-4 font-mono text-xs">
                {project.repo_url && (
                  <a
                    href={project.repo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`${accentText} hover:opacity-70 transition-opacity`}
                  >
                    → view repo
                  </a>
                )}
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`${accentText} hover:opacity-70 transition-opacity`}
                  >
                    → live demo
                  </a>
                )}
              </div>
            )}
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
