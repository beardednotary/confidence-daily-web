const STEPS = [
  {
    title: 'One Practice Daily',
    description:
      '30 seconds. That\'s it. Hold eye contact with a stranger. Speak up in a meeting. Set a boundary without apologizing.',
  },
  {
    title: 'Track Your Growth',
    description:
      'Watch your progress across four confidence dimensions: Presence, Voice, Boundaries, and Social Ease.',
  },
  {
    title: 'Structured Paths',
    description:
      'Go deeper with 8-week guided programs designed for specific transformations—from social confidence to executive presence.',
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
            <div key={step.title} className="flex flex-col items-start">
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
