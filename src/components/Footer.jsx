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
            SHEIN finds curated for quick outfit inspiration and easy shopping.
          </p>
          <a
            className="mt-4 inline-flex text-sm font-black text-softgold hover:text-gold"
            href="https://www.tiktok.com/@hypefinds14?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noreferrer"
          >
            TikTok @hypefinds14
          </a>
        </div>

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-softgold">Explore</p>
          <div className="grid gap-2 text-sm text-cream/70">
            <Link className="hover:text-softgold" to="/products">
              Products
            </Link>
            <Link className="hover:text-softgold" to="/outfits">
              Outfits
            </Link>
            <Link className="hover:text-softgold" to="/about">
              About
            </Link>
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.18em] text-softgold">Disclosure</p>
          <p className="text-sm leading-6 text-cream/70">
            Links are affiliate links. Prices shown are base prices and can be lower during
            promotions or higher depending on the selected product options.
          </p>
        </div>
      </div>
    </footer>
  );
}
