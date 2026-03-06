export default function Waitlist() {
  return (
    <section id="download" className="py-24 px-6 bg-charcoal">
      <div className="max-w-xl mx-auto text-center">
        <p className="text-caps mb-4" style={{ color: '#C9A96E' }}>Available Now</p>
        <h2 className="font-playfair font-bold text-warm-white text-4xl md:text-5xl tracking-tight mb-4">
          Start building confidence today.
        </h2>
        <p className="font-inter text-warm-white/60 text-lg mb-10 leading-relaxed">
          Free to download. One practice per day. Upgrade to Pro for full access to every path and reflection.
        </p>

        <a
          href="https://apps.apple.com/us/app/confidence-daily/id6758882035"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gold text-charcoal font-inter font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200"
        >
          Start Free
        </a>
      </div>
    </section>
  );
}
