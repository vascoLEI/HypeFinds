export default function MobileFilterDrawer({
  children,
  isOpen,
  onOpen,
  onClose,
  label = 'Filters',
}) {
  return (
    <>
      <button
        className="fixed left-0 top-1/2 z-40 -translate-y-1/2 rounded-r-full bg-ink px-3 py-4 text-lg font-black text-cream shadow-soft transition hover:bg-gold hover:text-ink lg:hidden"
        type="button"
        aria-label={`Open ${label}`}
        onClick={onOpen}
      >
        &gt;
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={onClose}
        >
          <div
            className="h-full w-[min(22rem,88vw)] overflow-y-auto bg-sand p-4 shadow-soft"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-gold">{label}</p>
              <button
                className="grid h-10 w-10 place-items-center rounded-full bg-cream text-lg font-black text-ink shadow-sm transition hover:bg-softgold"
                type="button"
                aria-label={`Close ${label}`}
                onClick={onClose}
              >
                X
              </button>
            </div>

            <div className="grid gap-4">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
}
