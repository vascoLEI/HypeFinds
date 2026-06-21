import ProductGrid from '../components/ProductGrid.jsx';
import { menCategories, products } from '../data/products.js';
import { useSEO } from '../hooks/useSEO.js';

export default function Men() {
  useSEO({
    title: 'Men SHEIN Finds | HypeFinds',
    description:
      'Browse men summer SHEIN finds including T-shirts, linen pants, watches, shoes and outfits.',
  });

  const menProducts = products.filter((product) => product.gender === 'men');

  return (
    <ProductGrid
      products={menProducts}
      categories={menCategories}
      intro={{
        title: 'Men Summer Finds',
        description:
          'Clean staples, linen textures, watches and easy outfits built for hot days and late nights.',
      }}
    />
  );
}
