const PATHS_LIST = [
  { label: 'Social Confidence', note: 'For introverts who want to show up', available: true },
  { label: 'Executive Presence', note: 'Coming March', available: false },
  { label: 'Dating Confidence', note: 'Coming April', available: false },
  { label: 'Public Speaking', note: 'Coming May', available: false },
];

const FEATURES = [
  {
    title: 'Daily Micro-Practices',
    description:
      'Small actions that actually build confidence. Each practice takes 30 seconds and targets a specific skill. No generic advice. Just clear, actionable steps.',
    extra: null,
  },
  {
    title: 'Progressive Difficulty',
    description:
      'Start with comfortable challenges. As you build momentum, practices adapt to push you further. Track your streak and watch the momentum compound.',
    extra: null,
  },
  {
    title: 'Guided 8-Week Paths',
    description:
      'Follow proven progressions for specific confidence goals. Each path includes weekly themes, Friday reflections, and weekend challenges.',
    extra: 'paths',
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-caps text-center mb-4">Features</p>
        <h2 className="font-playfair font-bold text-charcoal text-4xl text-center tracking-tight mb-14">
          Built for Real Growth
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-7 border border-taupe-light flex flex-col"
            >
              <h3 className="font-playfair font-semibold text-charcoal text-xl mb-3">
                {f.title}
              </h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                {f.description}
              </p>
              {f.extra === 'paths' && (
                <ul className="mt-5 space-y-2.5">
                  {PATHS_LIST.map((p) => (
                    <li key={p.label} className="flex items-start gap-2">
                      <span className="text-gold mt-0.5 text-xs">✓</span>
                      <span className="font-inter text-sm text-charcoal">
                        {p.label}
                        {!p.available && (
                          <span className="text-text-tertiary ml-1.5 text-xs">— {p.note}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
