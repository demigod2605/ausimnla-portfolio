"use client";

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

type Skill = { name: string; Icon?: IconType };

const groups: { key: string; proficiency: number; items: Skill[] }[] = [
  {
    key: "languages",
    proficiency: 87,
    items: [
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3 },
    ],
  },
  {
    key: "frameworks",
    proficiency: 85,
    items: [
      { name: "React", Icon: SiReact },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
    ],
  },
  {
    key: "backend",
    proficiency: 83,
    items: [
      { name: "Supabase", Icon: SiSupabase },
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "REST APIs", Icon: MdApi },
    ],
  },
  {
    key: "tooling",
    proficiency: 80,
    items: [
      { name: "Figma", Icon: SiFigma },
      { name: "Git", Icon: SiGit },
      { name: "Vercel", Icon: SiVercel },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 03 — skills
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        What I work with
      </h2>

      <div className="grid sm:grid-cols-2 gap-10">
        {groups.map((group) => (
          <div key={group.key}>
            <div className="flex items-center justify-between mb-2">
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {group.key}
              </p>
              <p className="font-mono text-xs text-cyan">{group.proficiency}%</p>
            </div>
            <div className="h-1.5 w-full rounded-full bg-panel2 border border-line overflow-hidden mb-4">
              <div
                className="h-full bg-cyan shadow-glow-sm"
                style={{ width: `${group.proficiency}%` }}
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-md border border-line bg-panel text-cyan
                             scale-100 hover:scale-110 hover:border-cyan/50 hover:shadow-glow-sm
                             transition-transform transition-shadow transition-colors duration-200 ease-out
                             origin-center cursor-default"
                >
                  {skill.Icon ? (
                    <skill.Icon aria-hidden className="text-xl shrink-0" />
                  ) : (
                    <span aria-hidden className="font-mono font-bold text-xs shrink-0">
                      {skill.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <span className="font-mono text-xs text-text whitespace-nowrap">
                    {skill.name}{" "}
                    <span className="text-cyan">{group.proficiency}%</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
