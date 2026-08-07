import Panel from "./Panel";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 05 — contact
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        Let's build something
      </h2>

      <Panel accent="cyan" label="transmit.sh" className="p-6 sm:p-8 max-w-xl">
        <p className="text-sm leading-relaxed text-muted mb-6">
          I'm always open to interesting projects, freelance work, or just a
          good conversation about building things on the web. Drop me a line
          and I'll get back to you soon.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="mailto:shaneaustinmmanila@gmail.com"
            className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
          >
            [ send email ]
          </a>
          <span className="font-mono text-xs text-muted">
            shaneaustinmmanila@gmail.com
          </span>
        </div>
      </Panel>
    </section>
  );
}
