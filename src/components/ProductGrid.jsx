import { useMemo, useState } from 'react';
import CategoryCard from './CategoryCard.jsx';
import ProductCard from './ProductCard.jsx';

export default function ProductGrid({ products, categories, intro }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      const searchableText = [product.name, product.category, product.gender, ...product.tags]
        .join(' ')
        .toLowerCase();
      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, products, searchTerm]);

  return (
    <section className="page-shell py-10 sm:py-14">
      <div className="grid gap-5 md:grid-cols-[1fr_22rem] md:items-end">
        <div>
          <p className="section-kicker mb-3">Shop by vibe</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">{intro.title}</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-cocoa">{intro.description}</p>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm font-black text-cocoa">Search finds</span>
          <input
            className="w-full rounded-full border border-ink/10 bg-cream px-5 py-4 text-base font-bold outline-none transition placeholder:text-cocoa/45 focus:border-gold focus:ring-4 focus:ring-gold/20"
            type="search"
            placeholder="Search bikinis, gold, linen..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </label>
      </div>

      <div className="-mx-4 mt-8 flex gap-3 overflow-x-auto px-4 pb-3">
        {['All', ...categories].map((category) => (
          <CategoryCard
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          />
        ))}
      </div>

      {filteredProducts.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-[1.75rem] border border-ink/10 bg-cream p-8 text-center">
          <p className="text-xl font-black">No finds match that search yet.</p>
          <p className="mt-2 text-cocoa">Try a broader keyword or switch category.</p>
        </div>
      )}
    </section>
  );
}
