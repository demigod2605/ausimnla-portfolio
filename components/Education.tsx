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
    period: "20XX — Present",
    school: "Your College / University Name",
    level: "College",
    note: "Expected graduation MONTH YYYY",
    status: "current",
  },
  {
    period: "20XX — 20XX",
    school: "Your Senior High School Name",
    level: "Junior & Senior High School",
    status: "past",
  },
  {
    period: "20XX — 20XX",
    school: "Your Elementary School Name",
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

        {/* photo stack — placeholders until you upload real graduation / school photos */}
        <div className="relative h-72 sm:h-80 hidden sm:block">
          <div className="absolute right-16 top-6 w-40 h-52 rounded-xl border border-line bg-panel rotate-[-8deg] shadow-glow-sm" />
          <div className="absolute right-6 top-10 w-40 h-52 rounded-xl border border-violet/40 bg-panel2 rotate-[4deg] shadow-glow-sm" />
          <div className="absolute right-0 top-2 w-40 h-52 rounded-xl border border-cyan/50 bg-void flex items-center justify-center shadow-glow">
            <span className="font-display font-bold text-6xl text-cyan/60">?</span>
          </div>
        </div>
      </div>
    </section>
  );
}
