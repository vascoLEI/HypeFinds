import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/men', label: 'Men' },
  { to: '/women', label: 'Women' },
  { to: '/accessories', label: 'Accessories' },
  { to: '/about', label: 'About' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    [
      'rounded-full px-4 py-2 text-sm font-bold transition',
      isActive ? 'bg-ink text-cream' : 'text-ink/70 hover:bg-white hover:text-ink',
    ].join(' ');

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/85 backdrop-blur-xl">
      <nav className="page-shell flex min-h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3" aria-label="HypeFinds home">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-sm font-black text-softgold">
            HF
          </span>
          <span>
            <span className="block text-lg font-black leading-none tracking-tight">HypeFinds</span>
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-cocoa/70">
              SHEIN Curated
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 rounded-full border border-ink/10 bg-cream/80 p-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <a
          href="https://www.shein.com/"
          className="hidden rounded-full bg-gold px-5 py-3 text-sm font-black text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-softgold md:inline-flex"
          target="_blank"
          rel="noreferrer"
        >
          Shop SHEIN
        </a>

        <button
          className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-cream text-ink md:hidden"
          type="button"
          aria-label="Open menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="space-y-1.5">
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
            <span className="block h-0.5 w-5 rounded-full bg-ink" />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-ink/10 bg-sand px-4 py-4 md:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
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
