import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-caps mb-6">Free on the App Store</p>

        <h1 className="font-playfair font-bold text-charcoal text-5xl md:text-6xl leading-tight tracking-tight mb-6">
          Where <span className="text-gold uppercase">Confidence</span>
          <br />
          Becomes Habit
        </h1>

        <p className="font-inter text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-10">
          Conf{'\u200C'}idence isn&apos;t something you have—it&apos;s something you build. Get one
          simple practice each day to strengthen specific conf{'\u200C'}idence skills.
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
        <p className="font-inter text-sm text-text-tertiary mt-3">
          Available for iPhone &amp; iPad
        </p>

        <div className="mt-16 mx-auto max-w-xs">
          <Image
            src="/app-screenshot.png"
            alt="Confidence Daily app progress screen showing 28 total practices completed and a 6-day streak"
            width={390}
            height={844}
            className="w-full h-auto rounded-[44px] shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}
