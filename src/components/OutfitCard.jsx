import { useState } from 'react';

function CopyCodeButton({ code }) {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      className="rounded-full border border-ink/10 bg-white px-4 py-3 text-sm font-black transition hover:border-gold hover:bg-softgold"
      type="button"
      onClick={copyCode}
    >
      {copied ? 'Copied' : `Copy Code: ${code}`}
    </button>
  );
}

function OutfitModal({ outfit, onClose }) {
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-end bg-ink/65 p-3 backdrop-blur-sm sm:place-items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Outfit details"
      onClick={onClose}
    >
      <div
        className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-cream shadow-soft"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="grid md:grid-cols-[0.9fr_1fr]">
          <img
            className="h-80 w-full object-cover md:h-full"
            src={outfit.image || '/images/placeholder-product.jpg'}
            alt="Outfit"
            onError={(event) => {
              event.currentTarget.src = '/images/placeholder-product.jpg';
            }}
          />

          <div className="grid gap-5 p-5 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="section-kicker mb-2">Complete outfit</p>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.18em] text-cocoa">
                  {outfit.gender}
                </p>
              </div>
              <button
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-xl font-black transition hover:bg-softgold"
                type="button"
                aria-label="Close outfit details"
                onClick={onClose}
              >
                X
              </button>
            </div>

            <div className="grid gap-3">
              {outfit.pieces.map((piece) => (
                <div className="rounded-[1.25rem] bg-white p-4" key={piece.label}>
                  <p className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-gold">
                    {piece.label}
                  </p>
                  <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
                    {piece.url ? (
                      <a
                        className="inline-flex items-center justify-center rounded-full bg-ink px-4 py-3 text-sm font-black text-cream transition hover:bg-gold hover:text-ink"
                        href={piece.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shop piece
                      </a>
                    ) : null}
                    {piece.code ? <CopyCodeButton code={piece.code} /> : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OutfitCard({ outfit }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="group overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
        <button className="block w-full text-left" type="button" onClick={() => setIsOpen(true)}>
          <div className="relative aspect-[4/5] overflow-hidden bg-white">
            <img
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              src={outfit.image || '/images/placeholder-product.jpg'}
              alt="Outfit"
              loading="lazy"
              onError={(event) => {
                event.currentTarget.src = '/images/placeholder-product.jpg';
              }}
            />
            <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-cocoa backdrop-blur">
              {outfit.gender}
            </span>
            <span className="absolute bottom-3 right-3 rounded-full bg-ink px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-cream">
              View pieces
            </span>
          </div>
        </button>
      </article>

      {isOpen ? <OutfitModal outfit={outfit} onClose={() => setIsOpen(false)} /> : null}
    </>
  );
}
