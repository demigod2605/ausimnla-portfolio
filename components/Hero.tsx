const marqueeItems = [
  "REACT", "NEXT.JS", "TAILWIND", "SUPABASE", "TYPESCRIPT", "UI/UX",
];

export default function Hero() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section id="top" className="relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-20 relative">
        <div
          aria-hidden
          className="absolute -top-10 right-0 sm:right-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl -z-10"
        />
        <div
          aria-hidden
          className="absolute top-24 left-0 sm:-left-10 w-56 h-56 bg-violet/10 rounded-full blur-3xl -z-10"
        />

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-line font-mono text-[11px] uppercase tracking-widest text-cyan mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse2" />
          status: available for work
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-7xl leading-[0.95] tracking-tight max-w-3xl text-text">
          Hey, I'm{" "}
          <span className="text-cyan">ausimnla</span>
          <br />
          I build precise,
          <br />
          fast, accessible{" "}
          <span className="relative inline-block">
            interfaces
            <span
              aria-hidden
              className="absolute left-0 -bottom-2 w-full h-[3px] bg-cyan/60"
            />
          </span>
          .
        </h1>

        <p className="mt-8 max-w-xl text-lg text-muted leading-relaxed font-sans">
          Frontend / UI developer focused on clean systems, careful detail,
          and interfaces that hold up under scrutiny.
        </p>

        <div className="mt-8 flex flex-wrap gap-4 font-mono text-sm">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded border border-cyan/50 text-cyan hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
          >
            [ view projects ]
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded border border-line text-text hover:border-cyan/50 hover:text-cyan transition-all"
          >
            [ get in touch ]
          </a>
        </div>
      </div>

      <div className="border-y border-line bg-panel overflow-hidden">
        <div className="flex animate-marquee py-3 whitespace-nowrap">
          {loop.map((item, i) => (
            <span
              key={i}
              className="font-mono text-sm text-muted px-6 flex items-center gap-6 uppercase tracking-widest"
            >
              {item}
              <span className="text-cyan/50">::</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
