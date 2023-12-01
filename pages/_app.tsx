import '~/styles/globals.css';
import { useSetAtom } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { type AppType } from 'next/app';

import products from '~/data/products.json';
import { useSyncSessionStorage } from '~/hooks/useSyncSessionStorage';
import { CartAtom, ProductsAtom, WishListAtom } from '~/store';
import { cartSchema, whishlistSchema } from '~/utils/schema';
import { Product } from '~/utils/types';

const parseCart = (setter: (v: Product[]) => void) => (v: ReturnType<typeof sessionStorage.getItem>) => {
  try {
    setter(cartSchema.parse(JSON.parse(v ?? '')));
  } catch {
    return setter([]);
  }
};

const parseWishlist = (setter: (v: number[]) => void) => (v: ReturnType<typeof sessionStorage.getItem>) => {
  try {
    setter(whishlistSchema.parse(JSON.parse(v ?? '')));
  } catch {
    setter([]);
  }
};

const MyApp: AppType = ({ Component, pageProps }) => {
  const setWishList = useSetAtom(WishListAtom);
  const setCart = useSetAtom(CartAtom);
  useSyncSessionStorage([
    { key: 'cart', setter: parseCart(setCart) },
    { key: 'wishlist', setter: parseWishlist(setWishList) },
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
