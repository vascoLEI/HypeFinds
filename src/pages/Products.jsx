import { useEffect, useMemo, useState } from 'react';
import FilterSidebar from '../components/FilterSidebar.jsx';
import MobileFilterDrawer from '../components/MobileFilterDrawer.jsx';
import ProductCard from '../components/ProductCard.jsx';
import { useSEO } from '../hooks/useSEO.js';
import { getProducts } from '../services/productsService.js';

const defaultFilters = {
  category: 'all',
  gender: 'all',
};

const labelMap = {
  men: 'Men',
  women: 'Women',
  accessories: 'Accessories',
};

function uniqueValues(values) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b));
}

function optionize(values, labels = {}) {
  return [
    { label: 'All', value: 'all' },
    ...values.map((value) => ({ label: labels[value] || value, value })),
  ];
}

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filters, setFilters] = useState(defaultFilters);
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  useSEO({
    title: 'Products | HypeFinds',
    description: 'Browse HypeFinds products with filters by category and gender.',
  });

  useEffect(() => {
    let isActive = true;

    async function loadProducts(showLoading = false) {
      if (showLoading) {
        setIsLoading(true);
      }

      const result = await getProducts();

      if (!isActive) {
        return;
      }

      setProducts(result.products);
      setIsLoading(false);
    }

    loadProducts(true);
    const refreshId = window.setInterval(() => loadProducts(false), 30000);

    return () => {
      isActive = false;
      window.clearInterval(refreshId);
    };
  }, []);

  const filterGroups = useMemo(() => {
    return [
      {
        id: 'category',
        label: 'Category',
        options: optionize(uniqueValues(products.map((product) => product.category))),
      },
      {
        id: 'gender',
        label: 'Gender',
        options: optionize(uniqueValues(products.map((product) => product.gender)), labelMap),
      },
    ].filter((group) => group.options.length > 1);
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory = filters.category === 'all' || product.category === filters.category;
      const matchesGender = filters.gender === 'all' || product.gender === filters.gender;
      const searchableText = product.name.toLowerCase();
      const matchesSearch = !normalizedSearch || searchableText.includes(normalizedSearch);

      return matchesCategory && matchesGender && matchesSearch;
    });
  }, [filters, products, searchTerm]);

  const updateFilter = (key, value) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  return (
    <section className="page-shell py-10 sm:py-14">
      <div className="mb-8 grid gap-5 lg:grid-cols-[18rem_1fr] lg:items-end">
        <div className="lg:col-start-2">
          <p className="section-kicker mb-3">All products</p>
          <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Shop the latest finds.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-cocoa">
            Filter by category and gender, search by name, then shop directly on SHEIN or copy the
            product code.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:h-[calc(100vh-8rem)] lg:grid-cols-[18rem_1fr] lg:items-start lg:overflow-hidden">
        <div className="hidden gap-4 lg:grid lg:max-h-full lg:overflow-y-auto lg:pr-1">
          <div className="rounded-[1.5rem] border border-gold/40 bg-cream p-4 text-sm leading-6 text-cocoa shadow-sm">
            <p className="font-black text-ink">Price note</p>
            <p className="mt-1">
              Prices shown are base prices. They can be lower during promotions or higher
              depending on the selected product options.
            </p>
          </div>

          <FilterSidebar
            title="Filters"
            groups={filterGroups}
            selectedFilters={filters}
            onChange={updateFilter}
            onClear={() => setFilters(defaultFilters)}
          />
        </div>

        <div className="lg:max-h-full lg:overflow-y-auto lg:pr-2">
          <label className="mb-6 block">
            <span className="mb-2 block text-sm font-black text-cocoa">Search products</span>
            <input
              className="w-full rounded-full border border-ink/10 bg-cream px-5 py-4 text-base font-bold outline-none transition placeholder:text-cocoa/45 focus:border-gold focus:ring-4 focus:ring-gold/20"
              type="search"
              placeholder="Search by name..."
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
            />
          </label>

          <MobileFilterDrawer
            label="Product filters"
            isOpen={isMobileFiltersOpen}
            onOpen={() => setIsMobileFiltersOpen(true)}
            onClose={() => setIsMobileFiltersOpen(false)}
          >
            <div className="rounded-[1.5rem] border border-gold/40 bg-cream p-4 text-sm leading-6 text-cocoa shadow-sm">
              <p className="font-black text-ink">Price note</p>
              <p className="mt-1">
                Prices shown are base prices. They can be lower during promotions or higher
                depending on the selected product options.
              </p>
            </div>
            <FilterSidebar
              title="Filters"
              groups={filterGroups}
              selectedFilters={filters}
              onChange={updateFilter}
              onClear={() => setFilters(defaultFilters)}
            />
          </MobileFilterDrawer>

          {isLoading ? (
            <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-8 text-center">
              <p className="text-xl font-black">Loading products...</p>
              <p className="mt-2 text-cocoa">Finding the latest products.</p>
            </div>
          ) : null}

          {!isLoading && filteredProducts.length > 0 ? (
            <div className="grid gap-5 md:grid-cols-2">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : null}

          {!isLoading && filteredProducts.length === 0 ? (
            <div className="rounded-[1.75rem] border border-ink/10 bg-cream p-8 text-center">
              <p className="text-xl font-black">No products match those filters.</p>
              <p className="mt-2 text-cocoa">Reset filters or try a broader search.</p>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
