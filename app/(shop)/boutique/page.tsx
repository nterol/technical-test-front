import { getProducts } from '~/data/products';
import { Product } from '~/utils/types';

import { FilteredProductList } from '../product-context';

import { FilterList } from './filter-list';

export default async function ProductsPage() {
  const res: Product[] = await getProducts();

  const s = new Set(
    res.map((product) => {
      return product.category;
    }),
  );
  const categories = [...s.values()];

  return (
    <>
      <section className="flex flex-col md:flex-row py-10 gap-10 w-full">
        <FilterList categories={categories} />
        <FilteredProductList products={res} />
      </section>
    </>
  );
}
