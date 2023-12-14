import { atom } from 'jotai';
import { atomFamily, atomWithStorage, createJSONStorage } from 'jotai/utils';

import { Cart, Product } from './utils/types';

/**
 * APP ROUTER TEST
 */

export const NewCart = atomWithStorage<{ productID: string; quantity: number }[]>(
  'new-cart',
  [],
  createJSONStorage(() => sessionStorage),
);

export const NewWishlist = atomWithStorage<string[]>(
  'new-whishlist',
  [],
  createJSONStorage(() => sessionStorage),
);

export const ProductIsInCart = atomFamily((productID) =>
  atom((get) => {
    const cart = get(NewCart);
    return cart.findIndex((c) => c.productID === productID) > -1;
  }),
);

export const NewAddToCart = atom(
  () => {},
  (get, set, { productID }: { productID: string }) => {
    const prevCart = get(NewCart);

    const hasProduct = prevCart.find((element) => element.productID === productID);

    if (hasProduct) {
      const cartMap = new Map(prevCart.map((p) => [p.productID, p]));
      cartMap.set(productID, { productID, quantity: hasProduct.quantity + 1 });
      set(NewCart, [...cartMap.values()]);
      return;
    }
    set(NewCart, [...prevCart, { productID, quantity: 1 }]);
  },
);

export const NewRemoveFromCart = atom(
  () => {},
  (get, set, { productID }: { productID: string }) => {
    const cart = get(NewCart);
    set(
      NewCart,
      cart.filter((c) => c.productID !== productID),
    );
  },
);

export const NewAddToWishList = atom(
  () => {},
  (get, set, productID: string) => {
    const wishlist = get(NewWishlist);
    if (wishlist.includes(productID)) {
      set(
        NewWishlist,
        wishlist.filter((w) => w !== productID),
      );
      return;
    }
    set(NewWishlist, [...new Set([...wishlist, productID]).values()]);
  },
);
export const IsProductInNewWhishList = atomFamily((id: string) =>
  atom((get) => {
    const wishlist = get(NewWishlist);
    return wishlist?.includes(id) ?? false;
  }),
);

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
  (get, set, productID: string) => {
    const prevCart = get(CartAtom);
    const pIndex = prevCart.findIndex((p) => p.id === productID);
    prevCart.splice(pIndex, 1);
    const newCart = [...prevCart];
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
