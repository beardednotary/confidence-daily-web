const TESTIMONIALS = [
  {
    quote: 'I spoke first in a meeting I would have stayed silent in. That\'s the app working.',
    name: 'Sarah M.',
    context: 'Social Confidence Path',
  },
  {
    quote: 'Other confidence apps gave me journaling prompts. This gives me things to actually do.',
    name: 'James T.',
    context: 'Daily Practice',
  },
  {
    quote: 'Week 3 and I\'ve already noticed a difference in how I carry myself. It\'s subtle but real.',
    name: 'Priya K.',
    context: 'Social Confidence Path',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-warm-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-caps text-center mb-4">Early users</p>
        <h2 className="font-playfair font-bold text-charcoal text-4xl text-center tracking-tight mb-14">
          Real change, not just
          <br />
          motivation.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-7 border border-taupe-light flex flex-col"
            >
              <p className="font-playfair text-charcoal text-lg leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-inter font-semibold text-charcoal text-sm">{t.name}</p>
                <p className="font-inter text-text-tertiary text-xs mt-0.5">{t.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
