import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';

import { Cart, Product } from './utils/types';

/** ALL ON PRRODUCTS */
export const FilterAtom = atom<Product['category'] | null>(null);
export const ProductsAtom = atom<null | Map<number, Product>>(null);

export const ProductList = atom((get) => {
  const productMap = get(ProductsAtom);
  return [...(productMap?.values() ?? [])];
});

export const FilteredProductsAtom = atom((get) => {
  const filter = get(FilterAtom);
  if (!filter) return get(ProductList);
  return get(ProductList)?.filter((product) => product.category === filter);
});

/** CART ATOMS */
export const IsCartOpenAtom = atom(false);

export const CartAtom = atom<Cart>([]);

export const AddToCartAtom = atom(
  () => {},
  (get, set, product: Product) => {
    const prevCart = get(CartAtom);
    const newCart = [...prevCart, product];
    sessionStorage.setItem('cart', JSON.stringify(newCart));

    set(CartAtom, newCart);
  },
);

export const RemoveFromCart = atom(
  () => {},
  (get, set, productID: number) => {
    const prevCart = get(CartAtom);
    const newCart = prevCart.filter((p) => p.id !== productID);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
    set(CartAtom, newCart);
  },
);

export const CartTotalPrice = atom((get) => {
  return get(CartAtom).reduce((a, c) => a + c.price, 0);
});

/** WISHLIST */
export const WishListAtom = atom<number[]>([]);

export const AddToWishList = atom(
  () => {},
  (get, set, productID: number) => {
    const wishList = get(WishListAtom);
    wishList.push(productID);
    const newWishlist = [...new Set(wishList)];
    sessionStorage.setItem('wishlist', JSON.stringify(newWishlist));
    set(WishListAtom, newWishlist);
  },
);

export const RemoveFromWishList = atom(
  () => {},
  (get, set, productID: number) => {
    const wishList = get(WishListAtom);
    const newWishlist = wishList.filter((id) => id !== productID);
    sessionStorage.setItem('wishlist', JSON.stringify(newWishlist));
    set(WishListAtom, newWishlist);
  },
);

export const WishListProductsAtom = atom((get) => {
  const wishIDList = get(WishListAtom);
  const productMap = get(ProductsAtom);

  return wishIDList?.map((productID) => productMap?.get(productID)).filter((e): e is Product => !!e) ?? [];
});

export const IsProductInWhishList = atomFamily((id: number) =>
  atom((get) => {
    const wishlist = get(WishListAtom);
    return wishlist?.includes(id) ?? false;
  }),
);
