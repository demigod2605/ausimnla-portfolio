import { projects } from "@/lib/projects";
import Panel from "./Panel";

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
            return (
              <Panel
                key={project.id}
                as="article"
                accent={accent}
                label={`project_${String(i + 1).padStart(2, "0")}`}
                className="p-6 flex flex-col gap-4"
              >
                <h3 className="font-display font-bold text-xl text-text">{project.title}</h3>
                {project.images && project.images.length > 0 && (
                  <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 snap-x">
                    {project.images.map((image) => (
                      <a
                        key={image.src}
                        href={image.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 snap-start"
                        title={image.alt}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          loading="lazy"
                          className="w-40 h-28 object-cover object-top rounded border border-line hover:border-cyan/60 transition-colors"
                        />
                      </a>
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
                <div className="flex gap-4 font-mono text-xs pt-1">
                  {project.repo_url && (
                    <a
                      href={project.repo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${accentText} hover:opacity-70 transition-opacity`}
                    >
                      → repo
                    </a>
                  )}
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${accentText} hover:opacity-70 transition-opacity`}
                    >
                      → live demo
                    </a>
                  )}
                </div>
              </Panel>
            );
          })}
        </div>
      )}
    </section>
  );
}
