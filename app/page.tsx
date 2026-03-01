import Image from 'next/image';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Paths from '@/components/Paths';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import Waitlist from '@/components/Waitlist';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Nav />
      <Hero />
      <HowItWorks />

      <div className="py-12 px-6 bg-white flex justify-center">
        <Image
          src="/app-screenshot.png"
          alt="Confidence Daily app progress screen showing 28 total practices completed and a 6-day streak"
          width={390}
          height={844}
          className="w-full max-w-[260px] h-auto rounded-2xl shadow-2xl"
        />
      </div>

      <Features />
      <Paths />
      <Pricing />
      <Testimonials />
      <Waitlist />

      {/* Final CTA */}
      <section className="py-24 px-6 bg-charcoal">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-playfair font-bold text-warm-white text-4xl md:text-5xl tracking-tight mb-4">
            Start Building Today
          </h2>
          <p className="font-inter text-warm-white/60 text-lg mb-10">
            Conf{'\u200C'}idence is a skill. Practice makes progress.
          </p>
          <a
            href="https://apps.apple.com/app/confidence-daily"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gold text-charcoal font-inter font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200"
          >
            Download on the App Store
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
