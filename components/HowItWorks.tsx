const STEPS = [
  {
    number: '01',
    title: 'One practice, every day',
    description:
      'Each morning, you get one specific action to take. Not a video to watch. Not a concept to learn. Something to actually do.',
  },
  {
    number: '02',
    title: 'Build a streak',
    description:
      'Show up daily. The streak keeps you honest. Missing one day doesn\'t erase your progress — but consistency compounds.',
  },
  {
    number: '03',
    title: 'Track real growth',
    description:
      'Your confidence level rises as you log completions. Watch it climb week over week with the Progress tab.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <p className="text-caps text-center mb-4">How it works</p>
        <h2 className="font-playfair font-bold text-charcoal text-4xl text-center tracking-tight mb-16">
          Simple by design.
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {STEPS.map((step) => (
            <div key={step.number} className="flex flex-col">
              <span className="font-playfair font-bold text-5xl text-gold/30 mb-4 leading-none">
                {step.number}
              </span>
              <h3 className="font-playfair font-semibold text-charcoal text-xl mb-3">
                {step.title}
              </h3>
              <p className="font-inter text-text-secondary text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
