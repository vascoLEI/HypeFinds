import { useState } from 'react';

export default function ProductCard({ product }) {
  const [copied, setCopied] = useState(false);
  const affiliateCode = 'HYPEFINDS';

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(affiliateCode);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
      <div className="relative aspect-[4/5] overflow-hidden bg-white">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cocoa backdrop-blur">
          {product.category}
        </span>
      </div>

      <div className="grid gap-4 p-4">
        <div>
          <h3 className="line-clamp-2 text-lg font-black leading-tight">{product.name}</h3>
          <div className="mt-2 flex items-center justify-between gap-3">
            <p className="text-xl font-black text-cocoa">{product.price}</p>
            <p className="rounded-full bg-softgold px-3 py-1 text-xs font-black uppercase tracking-[0.14em]">
              {product.gender}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-cocoa">
              #{tag}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-[1fr_auto] gap-2">
          <a
            className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-black text-cream transition hover:bg-gold hover:text-ink"
            href={product.sheinUrl}
            target="_blank"
            rel="noreferrer"
          >
            Shop on SHEIN
          </a>
          <button
            className="rounded-full border border-ink/10 bg-white px-4 py-3 text-sm font-black transition hover:border-gold hover:bg-softgold"
            type="button"
            onClick={copyCode}
          >
            {copied ? 'Copied' : 'Copy Code'}
          </button>
        </div>
      </div>
    </article>
  );
}
