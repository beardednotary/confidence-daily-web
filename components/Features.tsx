const FEATURES = [
  {
    icon: '☀️',
    title: 'Daily practices',
    description: 'One specific action each day. Calibrated to your level and adjusts as you grow.',
    free: true,
  },
  {
    icon: '🔥',
    title: 'Streak tracking',
    description: 'Calendar-day streaks that reward consistency without being punishing.',
    free: true,
  },
  {
    icon: '📊',
    title: 'Progress view',
    description: 'Watch your confidence level rise week over week with a clear visual history.',
    free: true,
  },
  {
    icon: '📍',
    title: '8-week paths',
    description: 'Structured progressions for specific confidence goals, unlocked with Pro.',
    free: false,
  },
  {
    icon: '✍️',
    title: 'Weekly reflections',
    description: 'Guided end-of-week prompts to consolidate your growth. Pro only.',
    free: false,
  },
  {
    icon: '⚡',
    title: 'Big moment prep',
    description: 'A quick ritual builder before meetings, presentations, or dates. Pro only.',
    free: false,
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-caps text-center mb-4">Features</p>
        <h2 className="font-playfair font-bold text-charcoal text-4xl text-center tracking-tight mb-4">
          Everything you need.
        </h2>
        <p className="font-inter text-text-secondary text-center text-lg max-w-lg mx-auto mb-14">
          The core practice is free. Pro unlocks the structured programs for people
          who want more.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-warm-white rounded-2xl p-6 border border-taupe-light relative"
            >
              {!f.free && (
                <span className="absolute top-4 right-4 font-inter font-semibold text-[10px] uppercase tracking-widest text-gold">
                  Pro
                </span>
              )}
              <span className="text-3xl mb-4 block">{f.icon}</span>
              <h3 className="font-inter font-semibold text-charcoal text-base mb-2">
                {f.title}
              </h3>
              <p className="font-inter text-text-secondary text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
