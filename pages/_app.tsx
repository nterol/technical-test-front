import '~/styles/globals.css';
import { useHydrateAtoms } from 'jotai/utils';
import { type AppType } from 'next/app';

import products from '~/data/products.json';
import { useSyncSessionStorage } from '~/hooks/useSyncSessionStorage';
import { ProductsAtom } from '~/store';
import { cartSchema, whishlistSchema } from '~/utils/schema';

const parseCart = (v: ReturnType<typeof sessionStorage.getItem>) => {
  try {
    return cartSchema.parse(JSON.parse(v ?? ''));
  } catch {
    return [];
  }
};

const parseWishlist = (v: ReturnType<typeof sessionStorage.getItem>) => {
  try {
    return whishlistSchema.parse(JSON.parse(v ?? ''));
  } catch {
    return [];
  }
};

const MyApp: AppType = ({ Component, pageProps }) => {
  useSyncSessionStorage([
    { key: 'cart', setter: parseCart },
    { key: 'wishlist', setter: parseWishlist },
  ]); //I know this is not ideal but I did not take the time to understand atomWithStorage properly

  useHydrateAtoms([
    [
      ProductsAtom,
      () => {
        const productMap = new Map();
        products.forEach((product) => productMap.set(product.id, product));
        return productMap;
      },
    ],
  ]);
  return <Component {...pageProps} />;
};

export default MyApp;
