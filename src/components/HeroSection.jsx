import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-cream">
      <div className="page-shell grid min-h-[calc(100vh-4rem)] items-center gap-10 py-12 md:grid-cols-[1fr_0.9fr] md:py-16">
        <div className="max-w-2xl">
          <p className="section-kicker mb-4">TikTok-ready outfit inspo</p>
          <h1 className="text-5xl font-black leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            Best SHEIN Finds for Summer Fits
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-cocoa">
            Outfits, accessories and essentials curated for your next look.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="pill-button bg-ink text-cream hover:bg-gold hover:text-ink" to="/men">
              Men
            </Link>
            <Link className="pill-button bg-gold text-ink hover:bg-softgold" to="/women">
              Women
            </Link>
            <Link className="pill-button bg-white text-ink" to="/accessories">
              Accessories
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 text-center sm:max-w-md">
            {[
              ['50+', 'Curated ideas'],
              ['3 taps', 'To shop'],
              ['Mobile', 'First layout'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-ink/10 bg-sand px-3 py-4">
                <p className="text-xl font-black">{value}</p>
                <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-cocoa/70">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-softgold blur-2xl" />
          <div className="absolute -right-8 bottom-10 h-32 w-32 rounded-full bg-gold/30 blur-3xl" />
          <div className="relative grid gap-4">
            <img
              className="h-[28rem] w-full rounded-[2rem] object-cover shadow-soft sm:h-[34rem]"
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1100&q=80"
              alt="Summer outfit inspiration with neutral fashion styling"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/50 bg-white/85 p-4 shadow-soft backdrop-blur">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-gold">Trending now</p>
              <p className="mt-1 text-lg font-black">Neutral sets, gold details, beach bags.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
