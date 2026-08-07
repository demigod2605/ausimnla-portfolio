"use client";

import { useEffect, useState } from "react";

const EMAIL = "shaneaustinmmanila@gmail.com";
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export default function EmailLinks() {
  const [href, setHref] = useState(`mailto:${EMAIL}`);

  useEffect(() => {
    const isMobile =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setHref(isMobile ? GMAIL_COMPOSE : `mailto:${EMAIL}`);
  }, []);

  const common = isMobileLink(href)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      <a
        href={href}
        {...common}
        className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
      >
        [ send email ]
      </a>
      <a
        href={href}
        {...common}
        className="font-mono text-xs text-muted hover:text-cyan transition-colors"
      >
        {EMAIL}
      </a>
    </>
  );
}

function isMobileLink(href: string) {
  return href.startsWith("https://");
}
