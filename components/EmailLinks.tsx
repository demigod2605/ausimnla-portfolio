"use client";

import { useEffect, useState } from "react";

const EMAIL = "shaneaustinmmanila@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const GMAIL_COMPOSE = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export default function EmailLinks() {
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    setIsAndroid(/Android/i.test(navigator.userAgent));
  }, []);

  const href = isAndroid ? GMAIL_COMPOSE : MAILTO;
  const targetProps = isAndroid
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      <a
        href={href}
        {...targetProps}
        className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
      >
        [ send email ]
      </a>
      <a
        href={MAILTO}
        className="font-mono text-xs text-muted hover:text-cyan transition-colors"
      >
        {EMAIL}
      </a>
    </>
  );
}
