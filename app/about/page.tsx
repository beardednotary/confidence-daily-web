import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About — Confidence Daily',
  description: 'The story behind Confidence Daily, built by DahVio Studios.',
};

const COMING_SOON = [
  { label: 'Executive Presence Path', date: 'March 2026' },
  { label: 'Dating Confidence Path', date: 'April 2026' },
  { label: 'Public Speaking Path', date: 'May 2026' },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Nav />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-caps mb-4">The Story</p>
          <h1 className="font-playfair font-bold text-charcoal text-5xl tracking-tight mb-16">
            About Confidence Daily
          </h1>

          <div className="space-y-12 font-inter text-text-secondary text-base leading-relaxed">
            <p className="font-playfair text-charcoal text-xl leading-relaxed">
              Confidence Daily was built by Ray, a solo founder at{' '}
              <a
                href="https://dahvio.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:opacity-80 transition-opacity"
              >
                DahVio Studios
              </a>
              .
            </p>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Why I Built This
              </h2>
              <div className="space-y-4">
                <p>
                  I got tired of generic confidence advice that never actually helped.
                  &ldquo;Just be yourself.&rdquo; &ldquo;Fake it till you make it.&rdquo;
                  &ldquo;Believe in yourself.&rdquo;
                </p>
                <p>None of that tells you what to do.</p>
                <p>
                  Confidence isn&apos;t something you think your way into—it&apos;s something
                  you practice your way into. Small actions. Repeated consistently.
                  That&apos;s what actually works.
                </p>
                <p>
                  Confidence Daily gives you one clear practice each day. 30 seconds.
                  No fluff. Just the work.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                The Approach
              </h2>
              <div className="space-y-4">
                <p>
                  Every practice is designed around a simple principle: confidence builds
                  through exposure, not affirmation.
                </p>
                <p>
                  You don&apos;t become confident by reading quotes or listening to
                  motivational speeches. You become confident by doing the uncomfortable
                  thing enough times that it stops being uncomfortable.
                </p>
                <p>
                  That&apos;s what this app does. It gives you the uncomfortable thing.
                  Every day. In small, manageable doses.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                What&apos;s Next
              </h2>
              <p className="mb-6">
                Right now, Confidence Daily includes the Social Confidence Path—8 weeks of
                progressive practices for introverts who want to show up.
              </p>
              <p className="mb-4">Coming soon:</p>
              <ul className="space-y-2 ml-4">
                {COMING_SOON.map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-xs">✓</span>
                    <span>
                      {item.label}
                      <span className="text-text-tertiary ml-1.5 text-sm">({item.date})</span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6">
                All paths are included with Pro. No upsells. No gimmicks.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Get in Touch
              </h2>
              <p className="mb-2">
                Questions, feedback, or just want to say hi?
              </p>
              <a
                href="mailto:ray@dahviostudios.com"
                className="text-charcoal underline underline-offset-2 hover:text-gold transition-colors"
              >
                ray@dahviostudios.com
              </a>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
