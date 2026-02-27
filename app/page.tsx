import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Paths from '@/components/Paths';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 814 1000" fill="currentColor">
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 336.8 1 237.5 1 143.3 1 64.4 48.1 22 92.6 22c83.3 0 133.4 72.4 154.4 72.4 19.5 0 79.5-72.4 162.2-72.4 49.3 0 110.9 24 153.5 93.3zm-161.1-72.4c-6.4-41.6 22.1-84.8 53.2-111.3 35.3-29.6 91.3-51.9 135-51.9 2.8 0 5.6.2 8.4.5-3.3 44.2-21.6 87.5-53.2 118.7-27 27.3-80.5 52-143.4 44z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Nav />
      <Hero />
      <HowItWorks />
      <Features />
      <Paths />
      <Pricing />
      <Testimonials />

      {/* Final CTA */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-warm-white text-4xl md:text-5xl tracking-tight mb-4">
            Start Building Today
          </h2>
          <p className="font-inter text-warm-white/60 text-lg mb-10">
            Confidence is a skill. Practice makes progress.
          </p>
          <a
            href="https://apps.apple.com/app/confidence-daily"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-gold text-charcoal font-inter font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            <AppleIcon />
            Download on the App Store
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
