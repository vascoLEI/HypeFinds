import ProductGrid from '../components/ProductGrid.jsx';
import { accessoryCategories, products } from '../data/products.js';
import { useSEO } from '../hooks/useSEO.js';

export default function Accessories() {
  useSEO({
    title: 'SHEIN Accessories | HypeFinds',
    description:
      'Browse SHEIN-inspired accessories including watches, bracelets, necklaces, sunglasses and bags.',
  });

  const accessoryProducts = products.filter((product) => product.gender === 'accessories');

  return (
    <ProductGrid
      products={accessoryProducts}
      categories={accessoryCategories}
      intro={{
        title: 'Accessories That Finish the Fit',
        description:
          'Soft gold accents, sunglasses, bracelets, necklaces and bags that make simple outfits feel styled.',
      }}
    />
  );
}
