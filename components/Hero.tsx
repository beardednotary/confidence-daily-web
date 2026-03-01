import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-0 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-caps mb-6">Free on the App Store</p>

        <h1 className="font-playfair font-bold text-charcoal text-5xl md:text-6xl leading-tight tracking-tight mb-6">
          Where <span className="text-gold uppercase">Confidence</span>
          <br />
          Becomes Habit
        </h1>

        <p className="font-inter text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          One practice per day, thirty seconds each. Every practice targets a specific skill — presence, voice, boundaries, or social ease. Do it enough, and it becomes the default.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://apps.apple.com/app/confidence-daily"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-charcoal text-warm-white font-inter font-semibold text-base px-8 py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all duration-200 shadow-md"
          >
            Download on the App Store
          </a>
        </div>
        <p className="font-inter text-sm text-text-tertiary mt-3 mb-16">
          Available for iPhone &amp; iPad
        </p>
      </div>

      {/* Hero image — full content width, flush to bottom */}
      <div className="max-w-5xl mx-auto">
        <Image
          src="/hero.png"
          alt="Confidence Daily app screens showing daily practices, progress tracking, and the Social Confidence Path"
          width={1200}
          height={800}
          className="w-full h-auto rounded-t-3xl"
          priority
        />
      </div>
    </section>
  );
}
