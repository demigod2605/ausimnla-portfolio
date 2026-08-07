import { supabase, isSupabaseConfigured } from "@/lib/supabaseClient";
import type { Project } from "@/lib/types";
import Panel from "./Panel";

async function getProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured) return [];

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("sort_order", { ascending: true });

  if (error || !data) return [];
  return data as Project[];
}

const accents: Array<"cyan" | "amber" | "violet"> = ["cyan", "amber", "violet"];

export default async function Projects() {
  const projects = await getProjects();

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
