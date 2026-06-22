import { useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/products', label: 'Products' },
  { to: '/outfits', label: 'Outfits' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinkClass = ({ isActive }) =>
    [
      'block rounded-2xl px-4 py-3 text-sm font-black transition',
      isActive ? 'bg-ink text-cream' : 'text-ink/70 hover:bg-sand hover:text-ink',
    ].join(' ');

  return (
    <header
      className={[
        'top-0 z-50 backdrop-blur-xl',
        isHome
          ? 'fixed left-0 right-0 text-cream'
          : 'sticky border-b border-ink/10 bg-sand/90 text-ink',
      ].join(' ')}
    >
      <nav className="page-shell flex min-h-20 items-center justify-between gap-4">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="HypeFinds home"
          onClick={() => setIsOpen(false)}
        >
          <img
            className="h-11 w-11 rounded-full object-cover shadow-soft"
            src="/images/hypefinds-logo.jpg"
            alt=""
          />
          <span className="hidden sm:block">
            <span className="block text-lg font-black leading-none tracking-tight">HypeFinds</span>
            <span
              className={[
                'text-xs font-bold uppercase tracking-[0.22em]',
                isHome ? 'text-cream/70' : 'text-cocoa/70',
              ].join(' ')}
            >
              SHEIN Curated
            </span>
          </span>
        </Link>

        <button
          className={[
            'grid h-12 w-12 place-items-center rounded-full border transition hover:-translate-y-0.5',
            isHome
              ? 'border-white/30 bg-white/10 text-cream hover:bg-white/20'
              : 'border-ink/10 bg-cream text-ink hover:border-gold',
          ].join(' ')}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
            <span className="block h-0.5 w-5 rounded-full bg-current" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="page-shell pb-5">
          <div className="ml-auto grid max-w-xs gap-2 rounded-[1.5rem] border border-ink/10 bg-cream p-3 text-ink shadow-soft">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
