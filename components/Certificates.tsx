import { certificates } from "@/lib/certificates";
import Panel from "./Panel";
import Reveal from "./Reveal";
import Tilt from "./Tilt";

const accents: Array<"cyan" | "amber" | "violet"> = ["cyan", "amber", "violet"];

export default function Certificates() {
  return (
    <section id="certificates" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 05 — certificates
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        Credentials
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 items-start">
        {certificates.map((cert, i) => {
          const accent = accents[i % accents.length];
          const accentText =
            accent === "cyan"
              ? "text-cyan"
              : accent === "amber"
                ? "text-amber"
                : "text-violet";
          return (
            <Reveal key={cert.id} delay={(i % 2) * 120}>
              <Tilt>
                <Panel
                  accent={accent}
                  label={`cert_${String(i + 1).padStart(2, "0")}`}
                  className="p-6"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="w-full rounded border border-line mb-4 object-cover"
                  />
                  <h3 className="font-display font-bold text-lg text-text">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted">{cert.issuer}</p>
                  <p className={`font-mono text-xs mt-1 ${accentText}`}>
                    {cert.year}
                  </p>
                </Panel>
              </Tilt>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
