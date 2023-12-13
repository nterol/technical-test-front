import { Product } from '~/utils/types';

import { FilteredProductList } from '../product-context';
//import { ProductList } from '../product-list';

import { FilterList } from './filter-list';

async function getProducts() {
  try {
    const res = await fetch(`${process.env.API_ENDPOINT}/products`, { cache: 'default' });

    if (res.ok) return res.json();
  } catch (err) {
    throw new Error('Could not retrieve data', { cause: err });
  }
}

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
