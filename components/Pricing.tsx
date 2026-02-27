export default function Pricing() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <p className="text-caps text-center mb-4">Pricing</p>
        <h2 className="font-playfair font-bold text-charcoal text-4xl text-center tracking-tight mb-4">
          Simple Pricing
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {/* Free */}
          <div className="bg-warm-white rounded-2xl p-8 border border-taupe-light flex flex-col">
            <p className="text-caps mb-2" style={{ color: '#9C9490' }}>Free Forever</p>
            <p className="font-playfair font-bold text-charcoal text-4xl mb-1">$0</p>
            <p className="font-inter text-text-tertiary text-sm mb-8">Always</p>
            <ul className="space-y-3 flex-1">
              {[
                'Daily randomized practices',
                'Track your progress',
                'Build the habit',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 text-sm">✓</span>
                  <span className="font-inter text-charcoal text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Lifetime */}
          <div className="bg-charcoal rounded-2xl p-8 border border-charcoal relative overflow-hidden flex flex-col">
            <div className="absolute top-5 right-5 bg-gold rounded-full px-3 py-1">
              <span className="font-inter font-bold text-[10px] text-charcoal tracking-widest uppercase">
                Best Value
              </span>
            </div>
            <p className="text-[0.7rem] font-semibold tracking-[0.1em] uppercase mb-2" style={{ color: '#C9A96E' }}>
              Pro
            </p>
            <p className="font-playfair font-bold text-warm-white text-4xl mb-1">$49</p>
            <p className="font-inter text-warm-white/50 text-sm mb-8">Lifetime</p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Everything in the free plan',
                'All structured paths',
                'Weekly reflections',
                'Full progress tracking',
                'One payment, yours forever',
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

          {/* Pro Monthly */}
          <div className="bg-warm-white rounded-2xl p-8 border border-taupe-light flex flex-col">
            <p className="text-caps mb-2" style={{ color: '#9C9490' }}>Pro</p>
            <p className="font-playfair font-bold text-charcoal text-4xl mb-1">$6.99</p>
            <p className="font-inter text-text-tertiary text-sm mb-8">Per month</p>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                'Everything in the free plan',
                'All Pro features',
                'Cancel anytime',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 text-sm">✓</span>
                  <span className="font-inter text-charcoal text-sm">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="https://apps.apple.com/app/confidence-daily"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-charcoal text-charcoal font-inter font-semibold text-sm py-3.5 rounded-xl hover:bg-charcoal hover:text-warm-white transition-colors"
            >
              Start Monthly
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
