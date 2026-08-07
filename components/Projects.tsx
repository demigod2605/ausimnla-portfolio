import { projects } from "@/lib/projects";
import Panel from "./Panel";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import ProjectCard from "./ProjectCard";

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
        <div className="grid sm:grid-cols-2 gap-8 items-start">
          {projects.map((project, i) => {
            const accent = accents[i % accents.length];
            const accentText = accent === "cyan" ? "text-cyan" : accent === "amber" ? "text-amber" : "text-violet";
            return (
              <Reveal key={project.id} delay={(i % 2) * 120}>
                <Tilt>
                  <ProjectCard
                    project={project}
                    accent={accent}
                    accentText={accentText}
                    label={`project_${String(i + 1).padStart(2, "0")}`}
                  />
                </Tilt>
              </Reveal>
            );
          })}
        </div>
      )}
    </section>
  );
}
