'use client';

import { useState } from 'react';

export default function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const res = await fetch('https://formspree.io/f/xpqjnbjq', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (res.ok) setSubmitted(true);
    setLoading(false);
  }

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-caps mb-4">Join the Waitlist</p>
        <h2 className="font-playfair font-bold text-charcoal text-4xl md:text-5xl tracking-tight mb-4">
          Get Notified at Launch
        </h2>
        <p className="font-inter text-text-secondary text-lg mb-10">
          Launching soon on the App Store. Be the first to know.
        </p>

        {submitted ? (
          <div className="max-w-lg mx-auto bg-gold rounded-2xl px-8 py-6">
            <p className="font-inter font-semibold text-white text-base">
              You&apos;re on the list!
            </p>
            <p className="font-inter text-white/80 text-sm mt-1">
              We&apos;ll email you when Conf{'\u200C'}idence Daily launches.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-6 py-4 border-2 border-charcoal rounded-full text-base bg-warm-white font-inter mb-4 outline-none focus:border-gold transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-charcoal text-warm-white border-2 border-charcoal rounded-full text-base font-semibold font-inter hover:opacity-90 active:scale-[0.98] transition-all duration-200 disabled:opacity-50"
            >
              {loading ? 'Joining…' : 'Join Waiting List'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
