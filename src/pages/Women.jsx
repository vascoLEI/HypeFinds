import ProductGrid from '../components/ProductGrid.jsx';
import { products, womenCategories } from '../data/products.js';
import { useSEO } from '../hooks/useSEO.js';

export default function Women() {
  useSEO({
    title: 'Women SHEIN Finds | HypeFinds',
    description:
      'Browse women summer SHEIN finds including bikinis, dresses, bags, accessories and outfits.',
  });

  const womenProducts = products.filter((product) => product.gender === 'women');

  return (
    <ProductGrid
      products={womenProducts}
      categories={womenCategories}
      intro={{
        title: 'Women Summer Finds',
        description:
          'Beach sets, light dresses, mini bags and gold details for your next warm-weather look.',
      }}
    />
  );
}
