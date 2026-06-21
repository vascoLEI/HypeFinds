import { Link } from 'react-router-dom';
import FeaturedSection from '../components/FeaturedSection.jsx';
import HeroSection from '../components/HeroSection.jsx';
import { useSEO } from '../hooks/useSEO.js';

export default function Home() {
  useSEO({
    title: 'HypeFinds | Best SHEIN Finds for Summer Fits',
    description:
      'Discover curated SHEIN outfit ideas, accessories and summer essentials with quick shop links.',
  });

  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <section className="bg-cream py-12 sm:py-16">
        <div className="page-shell">
          <div className="mb-8 max-w-2xl">
            <p className="section-kicker mb-3">How it works</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
              Find the vibe, copy the code, shop the look.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Pick a category',
                text: 'Browse Men, Women or Accessories and filter by summer-ready product types.',
              },
              {
                title: 'Save your code',
                text: 'Tap Copy Code before you open SHEIN so your shopping flow stays quick.',
              },
              {
                title: 'Shop on SHEIN',
                text: 'Use the product button to open the placeholder SHEIN link in a new tab.',
              },
            ].map((step, index) => (
              <article
                className="rounded-[1.75rem] border border-ink/10 bg-sand p-6 shadow-sm"
                key={step.title}
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-ink text-sm font-black text-softgold">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-cocoa">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] bg-ink p-6 text-cream sm:p-8">
            <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="section-kicker mb-3 text-softgold">Built for mobile traffic</p>
                <h2 className="text-2xl font-black sm:text-3xl">
                  Fast, visual and simple for TikTok bio clicks.
                </h2>
              </div>
              <Link
                className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-black text-ink transition hover:bg-softgold"
                to="/accessories"
              >
                Browse Accessories
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
