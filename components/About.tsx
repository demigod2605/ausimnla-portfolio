import Panel from "./Panel";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import { projects } from "@/lib/projects";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 01 — about
      </p>

      <h2 className="font-display font-bold text-5xl sm:text-6xl text-text mb-4">
        Who I am
      </h2>
      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan to-violet mb-10" />

      <div className="grid sm:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <Reveal>
          <div>
            <p className="text-muted leading-relaxed mb-4">
              Hi! I'm Austin Manila, a frontend / UI developer who cares about the
              details — smooth interactions, clean architecture, and code
              that's a joy to maintain. I work across the stack with
              TypeScript and React.
            </p>
            <p className="text-muted leading-relaxed mb-6">
              Right now I'm focused on building fast, accessible interfaces
              with Next.js and Tailwind CSS, and I'm always exploring new
              tools that make the web faster and more delightful.
            </p>
            <p className="inline-flex items-center gap-2 font-mono text-xs text-cyan">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse2" />
              Based in the Philippines
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="flex flex-col gap-4">
            <Tilt>
              <Panel accent="violet" className="p-6 flex items-center gap-4">
                <span className="font-display font-bold text-4xl bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
                  3+
                </span>
                <span className="text-sm text-muted">Years coding</span>
              </Panel>
            </Tilt>
            <Tilt>
              <Panel accent="cyan" className="p-6 flex items-center gap-4">
                <span className="font-display font-bold text-4xl bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
                  {projects.length}
                </span>
                <span className="text-sm text-muted">Projects built</span>
              </Panel>
            </Tilt>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
