const EMAIL = "shaneaustinmmanila@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

export default function EmailLinks() {
  const common = { href: MAILTO };

  return (
    <>
      <a
        {...common}
        className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
      >
        [ send email ]
      </a>
      <a
        {...common}
        className="font-mono text-xs text-muted hover:text-cyan transition-colors"
      >
        {EMAIL}
      </a>
    </>
  );
}
