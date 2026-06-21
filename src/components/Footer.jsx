import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-cream">
      <div className="page-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-3 inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-softgold text-sm font-black text-ink">
              HF
            </span>
            <span className="text-xl font-black">HypeFinds</span>
          </div>
          <p className="max-w-sm text-sm leading-6 text-cream/70">
            Summer-ready SHEIN finds curated for quick outfit inspiration and easy shopping.
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-softgold">Explore</p>
          <div className="grid gap-2 text-sm text-cream/70">
            <Link className="hover:text-softgold" to="/men">
              Men
            </Link>
            <Link className="hover:text-softgold" to="/women">
              Women
            </Link>
            <Link className="hover:text-softgold" to="/accessories">
              Accessories
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-softgold">Disclosure</p>
          <p className="text-sm leading-6 text-cream/70">
            Some links may be affiliate links. Product prices and availability are placeholders.
          </p>
        </div>
      </div>
    </footer>
  );
}
