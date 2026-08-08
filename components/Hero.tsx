const marqueeItems = [
  "REACT", "NEXT.JS", "TAILWIND", "TYPESCRIPT", "UI/UX", "ACCESSIBILITY",
];

import Reveal from "./Reveal";
import RealtimeClock from "./RealtimeClock";
import { socials } from "@/lib/socials";

export default function Hero() {
  const loop = [...marqueeItems, ...marqueeItems];

  return (
    <section id="top" className="relative">
      <Reveal className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 sm:pt-24 pb-20 relative">
        <div
          aria-hidden
          className="absolute -top-10 right-0 sm:right-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl -z-10"
        />
        <div
          aria-hidden
          className="absolute top-24 left-0 sm:-left-10 w-56 h-56 bg-violet/10 rounded-full blur-3xl -z-10"
        />

        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-line font-mono text-[11px] uppercase tracking-widest text-cyan">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse2" />
                status: available for work
              </div>
              <RealtimeClock />
            </div>

            <h1 className="font-display font-bold text-5xl sm:text-7xl leading-[0.95] tracking-tight text-text">
              Hey, I'm{" "}
              <span className="text-cyan">Austin Manila</span>
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

            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-sm">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="px-3 py-2.5 rounded border border-line text-muted hover:text-cyan hover:border-cyan/50 transition-all"
                >
                  <social.Icon className="w-4 h-4" aria-hidden />
                </a>
              ))}
              <span className="hidden sm:inline-block w-px h-6 bg-line mx-1" aria-hidden />
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

            <div className="mt-8 max-w-xl rounded border border-line bg-panel/80 p-4">
              <p className="font-mono text-[11px] uppercase tracking-widest text-cyan mb-3">
                // github contributions
              </p>
              <img
                src="https://ghchart.rshah.org/00FF41/demigod2605"
                alt="GitHub contribution graph for demigod2605"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>

          <div className="shrink-0 mx-auto lg:mx-0">
            <div className="relative inline-block">
              <div
                aria-hidden
                className="absolute -inset-4 bg-cyan/10 blur-2xl rounded-full"
              />
              <div className="relative overflow-hidden rounded-md border border-cyan/50 shadow-glow holo-flicker">
                <img
                  src="/profile.jpg"
                  alt="Austin Manila profile photo"
                  loading="lazy"
                  className="relative w-56 sm:w-64 object-cover aspect-[1179/2048] holo-img holo-glitch"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 holo-scanlines pointer-events-none"
                />
                <div aria-hidden className="holo-sweep" />
                <span
                  aria-hidden
                  className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan pointer-events-none"
                />
                <span
                  aria-hidden
                  className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan pointer-events-none"
                />
                <span
                  aria-hidden
                  className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan pointer-events-none"
                />
                <span
                  aria-hidden
                  className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan pointer-events-none"
                />
              </div>
              <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-cyan bg-void/90 border border-line rounded px-2 py-1 whitespace-nowrap">
                austin_manila.jpg
              </span>
            </div>
          </div>
        </div>
      </Reveal>

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
