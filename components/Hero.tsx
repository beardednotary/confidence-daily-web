export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-caps mb-6">Free on the App Store</p>

        <h1 className="font-playfair font-bold text-charcoal text-5xl md:text-6xl leading-tight tracking-tight mb-6">
          Build unshakeable
          <br />
          <span className="text-gold">confidence</span>, daily.
        </h1>

        <p className="font-inter text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          One practice a day. Specific, actionable, and designed to create
          real change — not just motivation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/app/confidence-daily"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-charcoal text-warm-white font-inter font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md"
          >
            <AppleIcon />
            Download on iOS — Free
          </a>
          <p className="font-inter text-sm text-text-tertiary">
            Your daily practice is free forever.
          </p>
        </div>

        {/* Phone mockup placeholder */}
        <div className="mt-16 mx-auto max-w-xs">
          <div className="relative bg-charcoal rounded-[44px] p-3 shadow-2xl">
            <div className="bg-warm-white rounded-[36px] overflow-hidden aspect-[9/19]">
              <div className="h-full flex flex-col items-center justify-center gap-4 p-8">
                <div className="w-20 h-20 rounded-full border-4 border-gold flex items-center justify-center">
                  <span className="font-playfair font-bold text-2xl text-gold">7</span>
                </div>
                <p className="font-playfair font-semibold text-charcoal text-xl text-center">
                  Day streak
                </p>
                <div className="w-full bg-taupe-light rounded-xl p-4 mt-2">
                  <p className="text-caps mb-2" style={{ color: '#C9A96E', fontSize: '0.6rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>Today&apos;s Practice</p>
                  <p className="font-playfair font-semibold text-charcoal text-sm leading-snug">
                    Speak first in the next conversation you enter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 336.8 1 237.5 1 143.3 1 64.4 48.1 22 92.6 22c83.3 0 133.4 72.4 154.4 72.4 19.5 0 79.5-72.4 162.2-72.4 49.3 0 110.9 24 153.5 93.3zm-161.1-72.4c-6.4-41.6 22.1-84.8 53.2-111.3 35.3-29.6 91.3-51.9 135-51.9 2.8 0 5.6.2 8.4.5-3.3 44.2-21.6 87.5-53.2 118.7-27 27.3-80.5 52-143.4 44z" />
    </svg>
  );
}
