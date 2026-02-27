export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-caps text-center mb-4">Pricing</p>
        <h2 className="font-playfair font-bold text-charcoal text-4xl text-center tracking-tight mb-4">
          Start free. Go deeper when ready.
        </h2>
        <p className="font-inter text-text-secondary text-center text-lg max-w-lg mx-auto mb-14">
          Your daily practice is free forever. Pro unlocks structured paths for specific transformations.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Free */}
          <div className="bg-warm-white rounded-2xl p-8 border border-taupe-light">
            <p className="text-caps mb-2" style={{ color: '#9C9490' }}>Free</p>
            <p className="font-playfair font-bold text-charcoal text-4xl mb-1">$0</p>
            <p className="font-inter text-text-tertiary text-sm mb-8">Forever</p>
            <ul className="space-y-3">
              {[
                'Daily confidence practices',
                'Streak tracking',
                'Progress analytics',
                'Level progression (1–5)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 text-sm">✓</span>
                  <span className="font-inter text-charcoal text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro */}
          <div className="bg-charcoal rounded-2xl p-8 border border-charcoal relative overflow-hidden">
            <div className="absolute top-5 right-5 bg-gold rounded-full px-3 py-1">
              <span className="font-inter font-bold text-[10px] text-charcoal tracking-widest uppercase">
                Best Value
              </span>
            </div>
            <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-2" style={{ color: '#C9A96E' }}>
              Lifetime Pro
            </p>
            <p className="font-playfair font-bold text-warm-white text-4xl mb-1">$49</p>
            <p className="font-inter text-warm-white/50 text-sm mb-8">One-time payment</p>
            <ul className="space-y-3 mb-8">
              {[
                'Everything in Free',
                '8-week Social Confidence path',
                'Weekly reflections',
                'Weekend challenges',
                'Big moment prep',
                'All future paths included',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 text-sm">✓</span>
                  <span className="font-inter text-warm-white text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.apple.com/app/confidence-daily"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-gold text-charcoal font-inter font-semibold text-sm py-3.5 rounded-xl hover:opacity-90 transition-opacity"
            >
              Get Lifetime Access
            </a>
          </div>
        </div>

        {/* Monthly note */}
        <p className="font-inter text-text-tertiary text-sm text-center mt-6">
          Also available as a monthly subscription — $6.99/month, cancel anytime.
        </p>
      </div>
    </section>
  );
}
