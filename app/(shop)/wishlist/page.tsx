import Link from 'next/link';

import { getProducts } from '~/data/products';
import { type Product } from '~/utils/types';

import { ProductsWishlist } from './product-wishlist';

export default async function WishListPage() {
  const products: Product[] = await getProducts();

  return (
    <section className="flex flex-col gap-8 w-full">
      <h2 className="font-bold text-4xl">My wishlist</h2>
      <ProductsWishlist products={products} />
      <Link href="/new/boutique" className="font-bold p-2 rounded-md border border-pink-300 w-fit">
        Go shop some more ! &rarr;
      </Link>
    </section>
  );
}
