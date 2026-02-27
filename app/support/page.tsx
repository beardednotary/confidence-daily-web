import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Support — Confidence Daily',
  description: 'Get help with Confidence Daily. FAQ and contact information.',
};

const FAQ = [
  {
    q: 'How do I restore my Pro purchase?',
    a: 'Open the app → Settings → Tap "Restore Purchases"',
  },
  {
    q: 'Can I change my notification time?',
    a: 'Yes. Settings → Daily Reminders → Tap the time to adjust.',
  },
  {
    q: 'How do streaks work?',
    a: 'Complete at least one practice per day to maintain your streak. The counter resets at midnight in your timezone.',
  },
  {
    q: 'What if I miss a day?',
    a: 'Your streak resets to 1, but your total practice count and progress in paths are never lost.',
  },
  {
    q: 'Do I need an internet connection?',
    a: 'The app works offline. You only need internet for initial download and in-app purchases.',
  },
  {
    q: 'How do I cancel my subscription?',
    a: 'Subscriptions are managed through your Apple ID. Go to iPhone Settings → Your Name → Subscriptions → Confidence Daily → Cancel.',
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Nav />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-caps mb-4">Help Center</p>
          <h1 className="font-playfair font-bold text-charcoal text-5xl tracking-tight mb-4">
            Support
          </h1>
          <p className="font-inter text-text-secondary text-lg mb-16">
            Have questions? We&apos;re here to help.
          </p>

          {/* Contact */}
          <div className="bg-white rounded-2xl p-8 border border-taupe-light mb-10">
            <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-3">
              Contact
            </h2>
            <p className="font-inter text-text-secondary text-base mb-2">
              Email us at{' '}
              <a
                href="mailto:support@confidencedaily.app"
                className="text-charcoal underline underline-offset-2 hover:text-gold transition-colors"
              >
                support@confidencedaily.app
              </a>
            </p>
            <p className="font-inter text-text-tertiary text-sm">
              We typically respond within 24 hours.
            </p>
          </div>

          {/* FAQ */}
          <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-6">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="bg-white rounded-2xl p-7 border border-taupe-light"
              >
                <p className="font-inter font-semibold text-charcoal text-base mb-2">
                  {item.q}
                </p>
                <p className="font-inter text-text-secondary text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          {/* Still need help */}
          <div className="mt-12 text-center">
            <p className="font-inter text-text-secondary text-base mb-2">
              Still need help?
            </p>
            <a
              href="mailto:support@confidencedaily.app"
              className="font-inter font-medium text-charcoal underline underline-offset-2 hover:text-gold transition-colors"
            >
              Email support@confidencedaily.app
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
