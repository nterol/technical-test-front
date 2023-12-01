import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import Image from 'next/image';

import { AddToCartCTA } from '~/components/molecules/cart-button';
import { DefaultLayout } from '~/components/templates/default-layout';
import products from '~/data/products.json';
import { formatPrice } from '~/utils/format';
import { Product } from '~/utils/types';

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: products.map((product) => ({
      params: { id: `${product.id}` },
    })),
    fallback: true,
  };
};

type Params = {
  id: string;
};
type Props = {
  product: Product;
};
export const getStaticProps: GetStaticProps<Props, Params> = async (ctx) => {
  const productID = ctx.params?.id ?? '1';

  const product = products.find((p) => p.id === parseInt(productID, 10)) as Product;

  if (!product) return { notFound: true };

  return {
    props: {
      product,
    },
  };
};

export default function ProductPage({ product }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout>
      <section className="flex flex-col md:flex-row w-full gap-6">
        <div className="relative aspect-square w-full flex-1">
          <Image fill src={product.image} alt={product.title} className="w-full aspect-square" priority />
        </div>
        <div className="p-6 grid grid-rows-[auto_auto_auto_1fr_auto] gap-3 items-center flex-1">
          <h2 className="font-bold text-4xl">{product.title}</h2>
          <span className="rounded-full border-3 border-yellow-500 bg-yellow-100 text-yellow-950 px-2 py-1 inline-flex justify-center w-fit text-sm">
            {product.category}
          </span>
          <p className="text-secondary-text text-2xl">{formatPrice(product.price)}</p>
          <p className="text-xl">{product.description}</p>
          <AddToCartCTA id={product.id} />
        </div>
      </section>
    </DefaultLayout>
  );
}
