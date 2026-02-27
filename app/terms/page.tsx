import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Terms of Use — Confidence Daily',
  description: 'Terms of Use for Confidence Daily.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Nav />

      <div className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          <p className="text-caps mb-4">Legal</p>
          <h1 className="font-playfair font-bold text-charcoal text-5xl tracking-tight mb-3">
            Terms of Use
          </h1>
          <p className="font-inter text-text-tertiary text-sm mb-16">
            Last updated: February 27, 2025
          </p>

          <div className="space-y-10 font-inter text-text-secondary text-base leading-relaxed">
            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Agreement to Terms
              </h2>
              <p>
                By downloading or using Confidence Daily, you agree to these Terms of Use.
                If you do not agree, do not use the app.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Use of the App
              </h2>
              <p className="mb-3">
                Confidence Daily is a personal development app provided for individual,
                non-commercial use. You agree not to:
              </p>
              <ul className="space-y-2 ml-4">
                {[
                  'Reverse engineer or attempt to extract the source code',
                  'Use the app for any unlawful purpose',
                  'Distribute, sell, or sublicense access to the app',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-1 text-xs">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                In-App Purchases
              </h2>
              <p className="mb-3">
                Pro features are available via one-time purchase or monthly subscription,
                processed through Apple&apos;s App Store. All purchases are governed by
                Apple&apos;s Terms of Service.
              </p>
              <p>
                Subscriptions automatically renew unless cancelled at least 24 hours before
                the end of the current period. Manage or cancel subscriptions in your
                Apple ID settings.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Disclaimer
              </h2>
              <p>
                Confidence Daily provides daily practices for personal development purposes
                only. It is not a substitute for professional mental health treatment or
                medical advice. The app is provided &ldquo;as is&rdquo; without warranties
                of any kind.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Changes to Terms
              </h2>
              <p>
                We may update these terms from time to time. Continued use of the app
                after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="font-playfair font-semibold text-charcoal text-2xl mb-4">
                Contact
              </h2>
              <p>
                Questions about these terms? Email{' '}
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
