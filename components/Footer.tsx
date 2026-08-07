import { socials } from "@/lib/socials";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <div className="flex items-center gap-3">
          <Logo size={24} gradientId="logo-grad-footer" />
          <p>© {new Date().getFullYear()} ausimnla. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="text-muted hover:text-cyan transition-colors"
            >
              <social.Icon aria-hidden className="text-lg" />
            </a>
          ))}
        </div>
        <p className="text-muted/70">{"// built with Next.js + Tailwind CSS"}</p>
      </div>
    </footer>
  );
}
