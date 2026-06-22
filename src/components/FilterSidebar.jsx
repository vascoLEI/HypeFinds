export default function FilterSidebar({ title, groups, selectedFilters, onChange, onClear }) {
  return (
    <aside className="rounded-[1.5rem] border border-ink/10 bg-cream p-4 shadow-sm lg:sticky lg:top-28">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="text-lg font-black">{title}</h2>
        <button
          className="rounded-full bg-sand px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-cocoa transition hover:bg-softgold hover:text-ink"
          type="button"
          onClick={onClear}
        >
          Reset
        </button>
      </div>

      <div className="grid gap-5">
        {groups.map((group) => (
          <section key={group.id}>
            <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-gold">
              {group.label}
            </p>
            <div className="flex flex-wrap gap-2 lg:grid">
              {group.options.map((option) => {
                const isActive = selectedFilters[group.id] === option.value;

                return (
                  <button
                    className={[
                      'rounded-full border px-4 py-2 text-sm font-black transition',
                      isActive
                        ? 'border-ink bg-ink text-cream'
                        : 'border-ink/10 bg-white text-ink hover:border-gold hover:bg-sand',
                    ].join(' ')}
                    type="button"
                    key={option.value}
                    onClick={() => onChange(group.id, option.value)}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </aside>
  );
}
