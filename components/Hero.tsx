export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-caps mb-6">Free on the App Store</p>

        <h1 className="font-playfair font-bold text-charcoal text-5xl md:text-6xl leading-tight tracking-tight mb-6">
          Where <span className="text-gold">Conf{'\u200C'}idence</span>
          <br />
          Becomes Habit
        </h1>

        <p className="font-inter text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Conf{'\u200C'}idence isn&apos;t something you have—it&apos;s something you build. Get one
          simple practice each day to strengthen specific conf{'\u200C'}idence skills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/app/confidence-daily"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-charcoal text-warm-white font-inter font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md"
          >
            Download on the App Store
          </a>
        </div>
        <p className="font-inter text-sm text-text-tertiary mt-3">
          Available for iPhone &amp; iPad
        </p>

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
