const PATHS = [
  {
    emoji: '👥',
    title: 'Social Confidence',
    subtitle: 'For introverts who want to show up',
    available: true,
    badge: null,
  },
  {
    emoji: '💼',
    title: 'Executive Presence',
    subtitle: 'For professionals who command rooms',
    available: false,
    badge: 'March 2026',
  },
  {
    emoji: '💫',
    title: 'Dating Confidence',
    subtitle: 'From anxiety to authentic connection',
    available: false,
    badge: 'April 2026',
  },
  {
    emoji: '🎤',
    title: 'Public Speaking',
    subtitle: 'Stop dreading presentations',
    available: false,
    badge: 'May 2026',
  },
];

export default function Paths() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-dark-surface">
      <div className="max-w-5xl mx-auto">
        <p className="text-caps text-center mb-4">Pro Paths</p>
        <h2 className="font-playfair font-bold text-charcoal dark:text-warm-white text-4xl text-center tracking-tight mb-4">
          Structured 8-week programs.
        </h2>
        <p className="font-inter text-text-secondary dark:text-[#A09890] text-center text-lg max-w-xl mx-auto mb-14 leading-relaxed">
          When you&apos;re ready for deeper work, unlock a path built for your specific goal.
          Progressive practices. Weekly reflections. Weekend challenges.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {PATHS.map((path) => (
            <div
              key={path.title}
              className={`relative rounded-2xl p-6 border transition-all ${
                path.available
                  ? 'bg-warm-white dark:bg-dark-bg border-gold shadow-sm'
                  : 'bg-warm-white dark:bg-dark-bg border-taupe-light dark:border-dark-border opacity-60'
              }`}
            >
              {path.badge && (
                <div className="absolute top-4 right-4 bg-taupe-light dark:bg-dark-border rounded-full px-2.5 py-1">
                  <span className="font-inter font-semibold text-xs text-text-secondary dark:text-[#A09890]">
                    {path.badge}
                  </span>
                </div>
              )}
              {path.available && (
                <div className="absolute -top-3 left-6 bg-gold rounded-full px-3 py-1">
                  <span className="font-inter font-bold text-[10px] text-charcoal tracking-widest uppercase">
                    Available Now
                  </span>
                </div>
              )}
              <span className="text-4xl mb-4 block">{path.emoji}</span>
              <h3 className="font-playfair font-semibold text-charcoal dark:text-warm-white text-lg mb-1">
                {path.title}
              </h3>
              <p className="font-inter text-text-secondary dark:text-[#A09890] text-xs italic leading-snug">
                {path.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
