"use client";

import { useEffect, useState } from "react";

const EMAIL = "shaneaustinmmanila@gmail.com";
const MAILTO = `mailto:${EMAIL}`;
const GMAIL_FALLBACK = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const GMAIL_INTENT = `intent:${EMAIL}#Intent;scheme=mailto;action=android.intent.action.SENDTO;package=com.google.android.gm;S.browser_fallback_url=${encodeURIComponent(GMAIL_FALLBACK)};end`;

function isAndroidChrome() {
  const ua = navigator.userAgent;
  return (
    /Android/.test(ua) &&
    /Chrome/.test(ua) &&
    !/SamsungBrowser|Edg\/|OPR\/|Vivaldi|YaBrowser|MiuiBrowser/.test(ua)
  );
}

export default function EmailLinks() {
  const [href, setHref] = useState(MAILTO);

  useEffect(() => {
    setHref(isAndroidChrome() ? GMAIL_INTENT : MAILTO);
  }, []);

  return (
    <>
      <a
        href={href}
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
