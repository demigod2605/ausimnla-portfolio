const links = [
  { href: "#about", label: "ABOUT", n: "01" },
  { href: "#education", label: "EDUCATION", n: "02" },
  { href: "#skills", label: "SKILLS", n: "03" },
  { href: "#projects", label: "PROJECTS", n: "04" },
  { href: "#contact", label: "CONTACT", n: "05" },
];

import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-void/90 backdrop-blur border-b border-line">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 font-mono font-bold text-text">
          <Logo
            size={28}
            gradientId="logo-grad-nav"
            className="transition-all duration-200 group-hover:drop-shadow-[0_0_6px_rgba(0,255,65,0.5)]"
          />
          ausimnla
        </a>
        <ul className="hidden sm:flex items-center gap-1 font-mono text-xs">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group px-3 py-2 flex items-center gap-1.5 text-muted hover:text-cyan transition-colors"
              >
                <span className="text-cyan/50 group-hover:text-cyan">{link.n}</span>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted border border-line rounded px-2 py-1">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse2" />
          online
        </span>
      </nav>
    </header>
  );
}
