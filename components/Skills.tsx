"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiSupabase,
  SiPostgresql,
  SiFigma,
  SiGit,
  SiVercel,
} from "react-icons/si";
import { FaHtml5, FaCss3 } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import type { IconType } from "react-icons";
import Reveal from "./Reveal";
import Panel from "./Panel";

type Skill = { name: string; proficiency: number; Icon?: IconType };

const groups: { key: string; items: Skill[] }[] = [
  {
    key: "languages",
    items: [
      { name: "TypeScript", proficiency: 100, Icon: SiTypescript },
      { name: "JavaScript", proficiency: 95, Icon: SiJavascript },
      { name: "HTML5", proficiency: 100, Icon: FaHtml5 },
      { name: "CSS3", proficiency: 95, Icon: FaCss3 },
    ],
  },
  {
    key: "frameworks",
    items: [
      { name: "React", proficiency: 100, Icon: SiReact },
      { name: "Next.js", proficiency: 100, Icon: SiNextdotjs },
      { name: "Tailwind CSS", proficiency: 98, Icon: SiTailwindcss },
    ],
  },
  {
    key: "backend",
    items: [
      { name: "Supabase", proficiency: 88, Icon: SiSupabase },
      { name: "PostgreSQL", proficiency: 85, Icon: SiPostgresql },
      { name: "REST APIs", proficiency: 90, Icon: MdApi },
    ],
  },
  {
    key: "tooling",
    items: [
      { name: "Figma", proficiency: 85, Icon: SiFigma },
      { name: "Git", proficiency: 90, Icon: SiGit },
      { name: "Vercel", proficiency: 90, Icon: SiVercel },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 03 — skills
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        What I work with
      </h2>

        <div className="grid sm:grid-cols-2 gap-10">
        {groups.map((group, i) => (
          <Reveal key={group.key} delay={(i % 2) * 120}>
            <Panel
              accent={(["cyan", "violet", "amber", "muted"] as const)[i % 4]}
              label={group.key}
              className="p-6"
            >
              <div className="flex flex-col gap-4">
                {group.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="flex items-center gap-2.5">
                        {skill.Icon ? (
                          <skill.Icon aria-hidden className="text-lg shrink-0 text-cyan" />
                        ) : (
                          <span aria-hidden className="font-mono font-bold text-xs shrink-0 text-cyan">
                            {skill.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                        <span className="font-mono text-xs text-text whitespace-nowrap">
                          {skill.name}
                        </span>
                      </span>
                      <span className="font-mono text-xs text-cyan">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-panel2 border border-line overflow-hidden">
                      <div
                        className="h-full bg-cyan shadow-glow-sm"
                        style={{
                          width: inView ? `${skill.proficiency}%` : "0%",
                          transition: "width 1.1s cubic-bezier(0.22, 1, 0.36, 1)",
                          transitionDelay: inView
                            ? `${i * 150 + (skill.proficiency % 100) * 2}ms`
                            : "0ms",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Panel>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
