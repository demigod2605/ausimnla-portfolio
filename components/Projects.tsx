import { projects } from "@/lib/projects";
import Panel from "./Panel";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const accents: Array<"cyan" | "amber" | "violet"> = ["cyan", "amber", "violet"];

export default function Projects() {

  return (
    <section id="projects" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 04 — projects
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        Things I've built
      </h2>

      {projects.length === 0 ? (
        <Panel accent="muted" className="p-8 text-center">
          <p className="font-mono text-sm text-muted">
            // projects coming soon — check back shortly
          </p>
        </Panel>
      ) : (
        <div className="grid sm:grid-cols-2 gap-8">
          {projects.map((project, i) => {
            const accent = accents[i % accents.length];
            const accentText = accent === "cyan" ? "text-cyan" : accent === "amber" ? "text-amber" : "text-violet";
            const href = project.repo_url || project.demo_url;
            const card = (
              <Panel
                as="article"
                accent={accent}
                label={`project_${String(i + 1).padStart(2, "0")}`}
                className="p-6 flex flex-col gap-4 h-full"
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
                <p className="text-sm leading-relaxed text-muted flex-1">{project.description}</p>
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
                {href && (
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-muted/70">// view on github</span>
                    <span className={accentText}>→ open</span>
                  </div>
                )}
              </Panel>
            );

            return (
              <Reveal key={project.id} delay={(i % 2) * 120} className="h-full">
                <Tilt className="h-full">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} — open project`}
                      className="block h-full"
                    >
                      {card}
                    </a>
                  ) : (
                    card
                  )}
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
}
