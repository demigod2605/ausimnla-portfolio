"use client";

import { useEffect, useState } from "react";

const EMAIL = "shaneaustinmmanila@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const GMAIL_COMPOSE = `https://mail.google.com/mail/u/0/?to=${EMAIL}&tf=cm`;
const GMAIL_INTENT = `intent:${EMAIL}#Intent;scheme=mailto;action=android.intent.action.SENDTO;package=com.google.android.gm;S.browser_fallback_url=${encodeURIComponent(GMAIL_COMPOSE)};end`;

type Mode = "compose" | "intent" | "mailto";

function detectMode(): Mode {
  const ua = navigator.userAgent;
  const isAndroid = /Android/i.test(ua);
  const isMobile = isAndroid || /iPhone|iPad|iPod/i.test(ua);
  const isAndroidFirefox = isAndroid && /Firefox|FxiOS/i.test(ua);
  if (isAndroid && !isAndroidFirefox) return "intent";
  if (isMobile) return "mailto";
  return "compose";
}

export default function EmailLinks() {
  const [mode, setMode] = useState<Mode>("compose");

  useEffect(() => {
    setMode(detectMode());
  }, []);

  const href =
    mode === "intent" ? GMAIL_INTENT : mode === "mailto" ? MAILTO : GMAIL_COMPOSE;

  return (
    <>
      <a
        href={href}
        {...(mode === "compose"
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
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
