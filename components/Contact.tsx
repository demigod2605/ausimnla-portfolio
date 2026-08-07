import Panel from "./Panel";
import Reveal from "./Reveal";
import Tilt from "./Tilt";
import EmailLinks from "./EmailLinks";
import { socials } from "@/lib/socials";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 05 — contact
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        Let's build something
      </h2>

      <Reveal>
        <Tilt>
          <Panel accent="cyan" label="transmit.sh" className="p-6 sm:p-8 max-w-xl">
            <p className="text-sm leading-relaxed text-muted mb-6">
              I'm always open to interesting projects, freelance work, or just a
              good conversation about building things on the web. Drop me a line
              and I'll get back to you soon.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <EmailLinks />
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className="flex items-center gap-2 px-3 py-2 rounded-md border border-line text-muted hover:text-cyan hover:border-cyan/50 hover:shadow-glow-sm transition-all"
                >
                  <social.Icon aria-hidden className="text-lg" />
                  <span className="font-mono text-xs">{social.name}</span>
                </a>
              ))}
            </div>
          </Panel>
        </Tilt>
      </Reveal>
    </section>
  );
}
