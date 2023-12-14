'use client';
import { useAtomValue } from 'jotai';

import { NewWishlist } from '~/store';
import { type Product } from '~/utils/types';

import { ProductList } from '../product-list';

import { EmptyList } from './empty-list';

export function ProductsWishlist({ products }: { products: Product[] }) {
  const wishlist = useAtomValue(NewWishlist);

  if (wishlist.length === 0) return <EmptyList />;

  const productMap = new Map(products.map((p) => [p.id, p]));
  const filtered = wishlist.map((w) => productMap.get(w)).filter((e): e is Product => !!e);

  return <ProductList products={filtered} />;
}
