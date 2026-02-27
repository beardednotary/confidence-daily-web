export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-taupe-light bg-warm-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-playfair font-semibold text-charcoal text-base">Confidence Daily</p>
          <p className="font-inter text-text-tertiary text-sm mt-1">
            &copy; {year} Confidence Daily. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-8">
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
            Terms of Use
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
