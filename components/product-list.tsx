import { useAtomValue } from 'jotai';
import Image from 'next/image';
import Link from 'next/link';

import { FilteredProductsAtom, WishListProductsAtom } from '~/store';
import s from '~/styles/auto-grid.module.css';
import { formatPrice } from '~/utils/format';
import { Product } from '~/utils/types';

import BasketIcon from './atoms/icons/basket';
import { WishlistButton } from './molecules/wishlist-button';

function ProductActions({ id }: { id: number }) {
  const handleToCart = () => {};

  return (
    <section className="flex justify-between">
      <button role="button" onClick={handleToCart} className="w-4 aspect-square text-primary-main">
        <BasketIcon />
      </button>
      <WishlistButton id={id} />
    </section>
  );
}

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="rounded-sm bg-white p-4 flex flex-col gap-3 shadow-md w-full">
      <section className="flex w-full justify-center h-[230px]">
        <Image src={product.image} alt={product.title} height={200} width={160} className="h-auto w-auto" />
      </section>
      <section className="flex flex-col gap-2">
        <h1>{product.title}</h1>
        <p className="text-secondary-text">{formatPrice(product.price)}</p>
      </section>
      <ProductActions id={product.id} />
    </article>
  );
}

type ProductListUIProps = {
  products: Product[];
};
export function ProductListUI({ products }: ProductListUIProps) {
  return (
    <div className={`${s.auto_grid} flex-2 w-full`}>
      {products?.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  );
}

export function ProductList() {
  const products = useAtomValue(FilteredProductsAtom);
  return <ProductListUI products={products} />;
}

export function ProductWishList() {
  const wishlist = useAtomValue(WishListProductsAtom);
  return wishlist.length > 0 ? (
    <ProductListUI products={wishlist} />
  ) : (
    <div className="flex flex-col gap-3">
      <p className="font-bold">Vous n&apos;avez aucun coup de coeur !</p>
      <Link href="/boutique" className="p-2 rounded-md bg-primary-main flex justify-center text-white">
        Time to shop ! 🛍️
      </Link>
    </div>
  );
}
