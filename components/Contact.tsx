"use client";

import { FormEvent, useState } from "react";
import Panel from "./Panel";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 sm:px-8 py-20">
      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-4">
        // 05 — contact
      </p>
      <h2 className="font-display font-bold text-3xl sm:text-4xl mb-10 text-text">
        Let's build something
      </h2>

      <Panel accent="cyan" label="transmit.sh" className="p-6 sm:p-8 max-w-xl">
        {status === "sent" ? (
          <p className="font-mono text-cyan">
            ✓ message sent — thanks, I'll get back to you soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-mono text-xs text-muted uppercase tracking-widest mb-1.5">
                {"> name"}
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full bg-panel2 border border-line rounded px-3 py-2.5 text-text placeholder:text-muted/50 focus:border-cyan/60 focus:shadow-glow-sm outline-none transition-all font-sans"
                placeholder="Jane Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-mono text-xs text-muted uppercase tracking-widest mb-1.5">
                {"> email"}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full bg-panel2 border border-line rounded px-3 py-2.5 text-text placeholder:text-muted/50 focus:border-cyan/60 focus:shadow-glow-sm outline-none transition-all font-sans"
                placeholder="jane@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-mono text-xs text-muted uppercase tracking-widest mb-1.5">
                {"> message"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-panel2 border border-line rounded px-3 py-2.5 text-text placeholder:text-muted/50 focus:border-cyan/60 focus:shadow-glow-sm outline-none transition-all resize-none font-sans"
                placeholder="Let's build something."
              />
            </div>

            {status === "error" && (
              <p className="font-mono text-xs text-danger">✗ {errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "[ sending... ]" : "[ send message ]"}
            </button>
          </form>
        )}
      </Panel>
    </section>
  );
}
