import { Link } from 'react-router-dom';
import { featuredProductIds, products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function FeaturedSection() {
  const featuredProducts = featuredProductIds
    .map((id) => products.find((product) => product.id === id))
    .filter(Boolean);

  return (
    <section className="page-shell py-12 sm:py-16">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="section-kicker mb-3">Featured Finds</p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Scroll-stopping pieces for summer.
          </h2>
        </div>
        <Link className="pill-button bg-cream" to="/women">
          View all finds
        </Link>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
