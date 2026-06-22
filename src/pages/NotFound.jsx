import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO.js';

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | HypeFinds',
    description: 'The HypeFinds page you requested could not be found.',
  });

  return (
    <section className="page-shell grid min-h-[70vh] place-items-center py-16 text-center">
      <div className="max-w-xl">
        <p className="section-kicker mb-3">404</p>
        <h1 className="text-5xl font-black tracking-tight sm:text-6xl">This fit got lost.</h1>
        <p className="mt-5 text-lg leading-8 text-cocoa">
          The page you are looking for does not exist, but the finds are still waiting.
        </p>
        <Link
          className="mt-8 inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-black text-cream transition hover:bg-gold hover:text-ink"
          to="/"
        >
          Back to Home
        </Link>
      </div>
    </section>
  );
}
