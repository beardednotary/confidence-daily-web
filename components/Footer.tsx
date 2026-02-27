export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-taupe-light bg-warm-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-playfair font-semibold text-charcoal text-base">Conf{'\u200C'}idence Daily</p>
          <p className="font-inter text-text-tertiary text-sm mt-1">
            Built by{' '}
            <a
              href="https://dahvio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-charcoal transition-colors"
            >
              DahVio Studios
            </a>
          </p>
          <p className="font-inter text-text-tertiary text-sm mt-0.5">
            &copy; 2026 DahVio Studios. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6 flex-wrap justify-center">
          <a
            href="/privacy"
            className="font-inter text-text-secondary text-sm hover:text-charcoal transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="/terms"
            className="font-inter text-text-secondary text-sm hover:text-charcoal transition-colors"
          >
            Terms
          </a>
          <a
            href="/support"
            className="font-inter text-text-secondary text-sm hover:text-charcoal transition-colors"
          >
            Support
          </a>
          <a
            href="/about"
            className="font-inter text-text-secondary text-sm hover:text-charcoal transition-colors"
          >
            About
          </a>
          <a
            href="https://apps.apple.com/app/confidence-daily"
            target="_blank"
            rel="noopener noreferrer"
            className="font-inter font-medium text-sm text-charcoal border border-charcoal rounded-full px-4 py-1.5 hover:bg-charcoal hover:text-warm-white transition-colors duration-200"
          >
            Download
          </a>
        </div>
      </div>
    </footer>
  );
}
