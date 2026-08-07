export default function Footer() {
  return (
    <footer className="border-t border-line bg-panel">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs text-muted">
        <p>© {new Date().getFullYear()} ausimnla. All rights reserved.</p>
        <p className="text-muted/70">{"// built with Next.js + Tailwind CSS"}</p>
      </div>
    </footer>
  );
}
