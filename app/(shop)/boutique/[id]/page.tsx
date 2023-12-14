import Image from 'next/image';

import { type Product } from '~/utils/types';

import DisplayPrice from '../display-price';

import { AddToCartCTA } from './add-to-cart';

async function getProduct(id: string) {
  const res = await fetch(`${process.env.API_ENDPOINT}/products/${id}`);

  if (res.ok) return res.json();
}

export default async function ProductPage({ params: { id } }: { params: { id: number } }) {
  const product: Product = await getProduct(`${id}`);

  return (
    <section className="flex flex-col md:flex-row w-full gap-6">
      <div className="relative aspect-square w-full flex-1">
        {product?.image ? (
          <Image
            fill
            sizes="640/480"
            src={product.image}
            alt={product.title}
            className="w-full aspect-square"
            priority
          />
        ) : null}
      </div>
      <div className="p-6 grid grid-rows-[auto_auto_auto_1fr_auto] gap-3 items-center flex-1">
        <h2 className="font-bold text-4xl">{product.title}</h2>
        <span className="rounded-full border-3 border-yellow-500 bg-yellow-100 text-yellow-950 px-2 py-1 inline-flex justify-center w-fit text-sm">
          {product.category}
        </span>
        <DisplayPrice price={product.price} />
        {/* <p className="text-secondary-text text-2xl">{formatPrice(product.price)}</p> */}
        <p className="text-xl">{product.description}</p>
        <AddToCartCTA productID={product.id} />
      </div>
    </section>
  );
}
