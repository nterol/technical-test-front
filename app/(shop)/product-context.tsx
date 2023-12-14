'use client';
import { useAtomValue } from 'jotai';

import { FilterAtom } from '~/store';
import { Product } from '~/utils/types';

import { ProductList } from './product-list';

export function FilteredProductList({ products }: { products: Product[] }) {
  const filter = useAtomValue(FilterAtom);

  return <ProductList products={filter ? products.filter((p) => p.category === filter) : products} />;
}
