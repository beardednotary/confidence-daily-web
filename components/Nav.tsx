export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-sm border-b border-taupe-light">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <span className="font-playfair font-semibold text-charcoal text-lg tracking-tight">
          Confidence Daily
        </span>
        <a
          href="https://apps.apple.com/app/confidence-daily"
          className="text-sm font-inter font-medium text-charcoal border border-charcoal rounded-full px-4 py-1.5 hover:bg-charcoal hover:text-warm-white transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Free
        </a>
      </div>
    </nav>
  );
}
