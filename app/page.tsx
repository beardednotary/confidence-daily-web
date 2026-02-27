import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Paths from '@/components/Paths';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-warm-white">
      <Nav />
      <Hero />
      <HowItWorks />
      <Paths />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
