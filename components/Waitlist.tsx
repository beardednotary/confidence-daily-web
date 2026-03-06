'use client';

import { useState } from 'react';

export default function Waitlist() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');

    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-charcoal">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-caps mb-4" style={{ color: '#C9A96E' }}>Early Access</p>
        <h2 className="font-playfair font-bold text-warm-white text-4xl md:text-5xl tracking-tight mb-4">
          Get early access to Pro.
        </h2>
        <p className="font-inter text-warm-white/60 text-lg mb-10 leading-relaxed">
          Lock in lifetime access at the launch price before it goes away.
          We&apos;ll email you when it&apos;s ready.
        </p>

        {status === 'success' ? (
          <div className="bg-warm-white/10 border border-warm-white/20 rounded-xl px-6 py-5">
            <p className="font-inter font-semibold text-warm-white text-base">You&apos;re on the list.</p>
            <p className="font-inter text-warm-white/60 text-sm mt-1">We&apos;ll be in touch when early access opens.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 bg-warm-white/10 border border-warm-white/20 text-warm-white placeholder:text-warm-white/40 font-inter text-base px-5 py-3.5 rounded-xl focus:outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="bg-gold text-charcoal font-inter font-semibold text-base px-7 py-3.5 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
            >
              {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        )}

        {status === 'error' && (
          <p className="font-inter text-sm text-red-400 mt-3">Something went wrong. Please try again.</p>
        )}
      </div>
    </section>
  );
}
