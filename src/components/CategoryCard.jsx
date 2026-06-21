export default function CategoryCard({ label, active, onClick }) {
  return (
    <button
      className={[
        'whitespace-nowrap rounded-full border px-5 py-3 text-sm font-black transition',
        active
          ? 'border-ink bg-ink text-cream shadow-soft'
          : 'border-ink/10 bg-cream text-ink hover:border-gold hover:bg-white',
      ].join(' ')}
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
