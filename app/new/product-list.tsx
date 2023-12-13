import Image from 'next/image';
import Link from 'next/link';

import { Product } from '~/utils/types';

import DisplayPrice from './boutique/display-price';
import { AddToCartButton } from './product-actions';
import { WishlistButton } from './wishlist-button';

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-sm bg-white p-4 grid grid-rows-[auto_1fr_auto] gap-3 shadow-md w-full">
      <section className="flex w-full justify-center h-[230px]">
        <Image src={product.image} alt={product.title} height={200} width={160} className="h-auto w-auto" />
      </section>
      <Link href={`/new/boutique/${product.id}`} className="flex flex-col gap-2">
        <h1>{product.title}</h1>
        <DisplayPrice price={product.price} />
      </Link>
      <section className="flex justify-between">
        <AddToCartButton productID={product.id} />
        <WishlistButton productID={product.id} />
      </section>
    </article>
  );
}

type ProductListUIProps = {
  products: Product[];
};
export function ProductList({ products }: ProductListUIProps) {
  return (
    <div className={`grid grid-cols-fill-64 gap-4 flex-2 w-full`}>
      {products?.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}
