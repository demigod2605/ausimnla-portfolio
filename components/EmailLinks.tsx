"use client";

import { useEffect, useState } from "react";

const EMAIL = "shaneaustinmmanila@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

function isTouchDevice() {
  return "ontouchstart" in window || navigator.maxTouchPoints > 0;
}

export default function EmailLinks() {
  const [href, setHref] = useState(MAILTO);

  useEffect(() => {
    setHref(isTouchDevice() ? GMAIL_COMPOSE : MAILTO);
  }, []);

  const opensNewTab = href.startsWith("http");

  const linkProps = opensNewTab
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      <a
        href={href}
        {...linkProps}
        className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
      >
        [ send email ]
      </a>
      <a
        href={href}
        {...linkProps}
        className="font-mono text-xs text-muted hover:text-cyan transition-colors"
      >
        {EMAIL}
      </a>
    </>
  );
}
