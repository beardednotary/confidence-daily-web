import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy — Confidence Daily',
  description: 'Privacy Policy for Confidence Daily.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Nav />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-caps mb-4">Legal</p>
          <h1 className="font-playfair font-bold text-charcoal text-5xl tracking-tight mb-3">
            Privacy Policy
          </h1>
          <p className="font-inter text-text-tertiary text-sm mb-16">
            Last updated: February 27, 2025
          </p>

          <div className="space-y-10 font-inter text-text-secondary text-base leading-relaxed">
            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Data Collection
              </h2>
              <p className="mb-4">Confidence Daily collects minimal data to provide the service:</p>
              <ul className="space-y-2 ml-4">
                {[
                  'Practice completion records (stored locally on your device)',
                  'Anonymous usage analytics via RevenueCat for purchase management',
                  'Email address (only if you contact support)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Data Storage
              </h2>
              <p className="mb-3">
                All practice data is stored locally on your device. We do not sync or store
                your practice history on our servers.
              </p>
              <p>
                Your progress, streak, and reflections live on your iPhone. If you delete
                the app, this data is deleted.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Third-Party Services
              </h2>
              <p>
                We use RevenueCat for in-app purchase management. See their privacy policy
                at{' '}
                <a
                  href="https://www.revenuecat.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-charcoal underline underline-offset-2 hover:text-gold transition-colors"
                >
                  revenuecat.com/privacy
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Data Deletion
              </h2>
              <p className="mb-3">
                Uninstalling the app deletes all local data immediately.
              </p>
              <p>
                To request deletion of any purchase-related data stored by RevenueCat,
                email{' '}
                <a
                  href="mailto:support@confidencedaily.app"
                  className="text-charcoal underline underline-offset-2 hover:text-gold transition-colors"
                >
                  support@confidencedaily.app
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Your Privacy Matters
              </h2>
              <ul className="space-y-2 ml-4">
                {[
                  'No social features. No sharing required.',
                  'No account creation or login.',
                  'No ads or third-party tracking.',
                  'Your practice is private.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-xs">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Contact
              </h2>
              <p>
                Questions about privacy? Email{' '}
                <a
                  href="mailto:support@confidencedaily.app"
                  className="text-charcoal underline underline-offset-2 hover:text-gold transition-colors"
                >
                  support@confidencedaily.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
