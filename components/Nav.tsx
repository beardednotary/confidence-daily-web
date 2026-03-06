import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 dark:bg-dark-bg/90 backdrop-blur-sm border-b border-taupe-light dark:border-dark-border">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-playfair font-semibold text-charcoal dark:text-warm-white text-lg uppercase tracking-wider hover:opacity-80 transition-opacity">
          Confidence Daily
        </Link>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://apps.apple.com/us/app/confidence-daily/id6758882035"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-inter font-medium text-charcoal dark:text-warm-white border border-charcoal dark:border-warm-white rounded-full px-4 py-1.5 hover:bg-charcoal hover:text-warm-white dark:hover:bg-warm-white dark:hover:text-charcoal transition-colors duration-200"
          >
            Download Free
          </a>
        </div>
      </div>
    </nav>
  );
}
