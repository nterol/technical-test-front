'use client';

import { useAtomValue, useSetAtom } from 'jotai';

import BasketIcon from '~/components/atoms/icons/basket';
import { CrossIcon } from '~/components/atoms/icons/cross';
import { NewAddToCart, NewRemoveFromCart, ProductIsInCart } from '~/store';

export function AddToCartButton({ productID }: { productID: string }) {
  const addToCard = useSetAtom(NewAddToCart);
  const isInCart = useAtomValue(ProductIsInCart(productID));
  const removeFromCart = useSetAtom(NewRemoveFromCart);
  return (
    <div
      data-active={isInCart}
      className="w-10 grid grid-cols-[16px_0px] data-[active=true]:grid-cols-[16px_16px] grid-rows-1 overflow-hidden transition-all ease-out gap-2 items-center"
    >
      <button
        data-active={isInCart}
        role="button"
        onClick={() => addToCard({ productID })}
        className="text-primary-main data-[active=true]:text-green-400 w-full aspect-square"
      >
        <BasketIcon />
      </button>
      <button role="button" onClick={() => removeFromCart({ productID })} className="text-red-600 w-full aspect-square">
        <CrossIcon />
      </button>
    </div>
  );
}
