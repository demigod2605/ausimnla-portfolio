import { ReactNode } from "react";

const accentClasses: Record<string, string> = {
  cyan: "text-cyan border-cyan/40 hover:shadow-glow",
  amber: "text-amber border-amber/40 hover:shadow-glow-amber",
  violet: "text-violet border-violet/40 hover:shadow-glow",
  muted: "text-line border-line hover:shadow-glow-sm",
};

export default function Panel({
  children,
  label,
  accent = "cyan",
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  label?: string;
  accent?: "cyan" | "amber" | "violet" | "muted";
  className?: string;
  as?: "div" | "article";
}) {
  return (
    <As
      className={`corner-brackets relative rounded-md border bg-panel/80 backdrop-blur-sm scale-100 hover:scale-105 transition-transform transition-shadow duration-200 ease-out origin-center ${accentClasses[accent]} ${className}`}
    >
      <span className="bracket-tl" />
      <span className="bracket-br" />
      {label && (
        <span className="absolute -top-3 left-4 px-2 bg-void font-mono text-[10px] tracking-widest uppercase text-current">
          {label}
        </span>
      )}
      {children}
    </As>
  );
}
