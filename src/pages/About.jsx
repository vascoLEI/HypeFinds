import { useSEO } from '../hooks/useSEO.js';

export default function About() {
  useSEO({
    title: 'About HypeFinds',
    description:
      'Learn how HypeFinds curates fashion and accessory finds from SHEIN for outfit inspiration.',
  });

  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] shadow-soft">
          <img
            className="h-[28rem] w-full object-cover"
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1000&q=80"
            alt="Curated clothing rack with neutral summer outfits"
          />
        </div>

        <div>
          <p className="section-kicker mb-3">About</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Curated fashion finds without the endless scrolling.
          </h1>
          <div className="mt-6 grid gap-4 text-lg leading-8 text-cocoa">
            <p>
              HypeFinds brings together fashion and accessory finds from SHEIN so visitors can
              discover outfits, seasonal staples and small details that complete a look.
            </p>
            <p>
              The site is designed for quick mobile browsing from TikTok traffic, with simple
              filters, clear images and direct buttons that redirect shoppers to SHEIN.
            </p>
          </div>

          <div className="mt-8 rounded-[1.75rem] border border-gold/40 bg-cream p-6">
            <p className="text-xl font-black">Some links may be affiliate links.</p>
            <p className="mt-2 leading-7 text-cocoa">
              This website does not process payments, manage checkout or sell products directly.
              It only displays curated product ideas and redirects to external SHEIN pages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
