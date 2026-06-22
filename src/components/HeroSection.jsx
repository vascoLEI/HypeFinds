import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-ink text-cream">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
      >
        <source
          src="https://videos.pexels.com/video-files/2169880/2169880-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />

      <div className="page-shell relative grid min-h-screen place-items-center py-24 text-center">
        <div>
          <p className="mb-5 text-xs font-black uppercase tracking-[0.35em] text-softgold">
            Outfits and accessories
          </p>
          <h1 className="brand-title text-5xl leading-none text-cream drop-shadow-2xl sm:text-7xl lg:text-8xl">
            HYPEFINDS
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-cream/80 sm:text-lg">
            Curated SHEIN finds, complete outfits and quick links for your next look.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-cream px-6 py-4 text-sm font-black text-ink transition hover:-translate-y-0.5 hover:bg-softgold"
              to="/products"
            >
              Explore Products
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-6 py-4 text-sm font-black text-cream backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/20"
              to="/outfits"
            >
              View Outfits
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
