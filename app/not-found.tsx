import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-5 sm:px-8 py-32 sm:py-40 flex flex-col items-center text-center">
      <Logo size={56} gradientId="logo-grad-404" className="mb-8" />

      <p className="font-mono text-xs text-cyan/70 uppercase tracking-widest mb-6">
        // error_404
      </p>

      <h1 className="font-display font-bold text-7xl sm:text-8xl leading-none tracking-tight text-text mb-6">
        4<span className="text-cyan">0</span>4
      </h1>

      <p className="font-mono text-sm text-muted mb-10">
        // the requested page could not be located in this system
      </p>

      <a
        href="/"
        className="px-5 py-2.5 rounded border border-cyan/50 text-cyan font-mono text-sm hover:bg-cyan hover:text-void hover:shadow-glow transition-all"
      >
        [ return to base ]
      </a>
    </div>
  );
}
