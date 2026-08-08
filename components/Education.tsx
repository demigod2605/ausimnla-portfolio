import Reveal from "./Reveal";
import Panel from "./Panel";
import Tilt from "./Tilt";

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

      <div className="grid sm:grid-cols-2 gap-6">
        {timeline.map((entry, i) => {
          const accent = entry.status === "current" ? "cyan" : "violet";
          return (
            <Reveal key={entry.school} delay={(i % 2) * 120}>
              <Tilt>
                <Panel
                  accent={accent}
                  label={`edu_${String(i + 1).padStart(2, "0")}`}
                  className="p-6"
                >
                  <div className="flex items-center justify-between mb-1">
                    <p className="font-mono text-xs text-cyan">{entry.period}</p>
                    {entry.status === "current" && (
                      <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-cyan">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse2" />
                        current
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-bold text-lg text-text">
                    {entry.school}
                  </h3>
                  <p className="text-sm text-muted">{entry.level}</p>
                  {entry.note && (
                    <p className="font-mono text-xs text-muted/70 mt-1">
                      {entry.note}
                    </p>
                  )}
                </Panel>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
