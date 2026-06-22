import { useSEO } from '../hooks/useSEO.js';

export default function About() {
  useSEO({
    title: 'About HypeFinds',
    description:
      'Learn how HypeFinds shares daily TikTok outfits and SHEIN finds.',
  });

  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center">
        <div className="grid min-h-[28rem] place-items-center overflow-hidden rounded-[2rem] bg-ink p-8 shadow-soft">
          <img
            className="h-full max-h-80 w-full max-w-sm rounded-[2rem] object-cover"
            src="/images/hypefinds-logo.jpg"
            alt="HypeFinds logo"
          />
        </div>

        <div>
          <p className="section-kicker mb-3">About</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
            Daily outfits and SHEIN finds without the endless scrolling.
          </h1>
          <div className="mt-6 grid gap-4 text-lg leading-8 text-cocoa">
            <p>
              HypeFinds is a TikTok profile posting daily outfits, accessories and SHEIN finds for
              people who want quick inspiration and direct shopping links.
            </p>
            <p>
              This site supports the TikTok page with simple filters, clear product cards and
              direct buttons that redirect shoppers to SHEIN.
            </p>
          </div>

          <a
            className="mt-7 inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-black text-cream transition hover:bg-gold hover:text-ink"
            href="https://www.tiktok.com/@hypefinds14?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noreferrer"
          >
            Follow HypeFinds on TikTok
          </a>

          <div className="mt-8 rounded-[1.75rem] border border-gold/40 bg-cream p-6">
            <p className="text-xl font-black">Links are affiliate links.</p>
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
