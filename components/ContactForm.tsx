"use client";

import { FormEvent, useState } from "react";

const FORM_ENDPOINT = "https://formspree.io/f/maewnzrq";

type Status = "idle" | "submitting" | "success" | "error";

const inputClass =
  "w-full bg-void border border-line rounded px-3 py-2.5 font-mono text-sm text-text placeholder:text-muted/50 focus:outline-none focus:border-cyan/60 focus:shadow-glow-sm transition-all";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("submitting");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="font-mono text-sm text-cyan">
        // message sent — I'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            name
          </span>
          <input type="text" name="name" required className={inputClass} />
        </label>
        <label className="block">
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
            email
          </span>
          <input type="email" name="email" required className={inputClass} />
        </label>
      </div>
      <label className="block mt-4">
        <span className="font-mono text-[11px] uppercase tracking-widest text-muted">
          message
        </span>
        <textarea
          name="message"
          required
          rows={4}
          className={`${inputClass} resize-none`}
        />
      </label>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-6">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all disabled:opacity-50 disabled:pointer-events-none"
        >
          {status === "submitting" ? "[ transmitting... ]" : "[ send message ]"}
        </button>
        {status === "error" && (
          <p className="font-mono text-xs text-amber">
            // transmission failed — try again or email directly.
          </p>
        )}
      </div>
    </form>
  );
}
