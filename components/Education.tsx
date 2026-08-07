import Panel from "./Panel";

type EducationEntry = {
  period: string;
  school: string;
  level: string;
  note?: string;
  status: "current" | "past";
};

const timeline: EducationEntry[] = [
  {
    period: "2023 — Present",
    school: "San Pablo Colleges",
    level: "College",
    note: "Expected graduation July 2027",
    status: "current",
  },
  {
    period: "2021 — 2023",
    school: "Movers International School",
    level: "Senior High School",
    status: "past",
  },
  {
    period: "2017 — 2021",
    school: "Las Piñas National High School - Almanza",
    level: "Junior High School",
    status: "past",
  },
  {
    period: "2011 — 2017",
    school: "Almanza Elementary School",
    level: "Elementary",
    status: "past",
  },
];

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 02 — education
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        Where I studied
      </h2>

      <div className="grid sm:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <div>
          <div className="relative pl-8">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line" />
            <ul className="space-y-10">
              {timeline.map((entry) => (
                <li key={entry.school} className="relative">
                  <span
                    className={`absolute -left-8 top-1 w-3.5 h-3.5 rounded-full border-2 ${
                      entry.status === "current"
                        ? "bg-cyan border-cyan shadow-glow-sm"
                        : "bg-void border-violet"
                    }`}
                  />
                  <p className="font-mono text-xs text-cyan mb-1">{entry.period}</p>
                  <h3 className="font-display font-bold text-lg text-text">{entry.school}</h3>
                  <p className="text-sm text-muted">{entry.level}</p>
                  {entry.note && (
                    <p className="font-mono text-xs text-muted/70 mt-1">{entry.note}</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <Panel accent="muted" className="mt-8 p-4 max-w-2xl">
            <p className="font-mono text-xs text-muted">
              // placeholder data — send me your real school names, years,
              and expected graduation date and I'll swap these in.
            </p>
          </Panel>
        </div>
        </div>
    </section>
  );
}
