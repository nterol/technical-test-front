import { useAtomValue, useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import { AddToCartAtom, ProductsAtom, RemoveFromCart } from '~/store';

import BasketIcon from '../atoms/icons/basket';
import { TrashIcon } from '../atoms/icons/trash';

export function DeleteProductButton({ id }: { id: number }) {
  const removeFromCart = useSetAtom(RemoveFromCart);
  return (
    <button role="button" className="w-4 aspect-square text-primary-main" onClick={() => removeFromCart(id)}>
      <TrashIcon />
    </button>
  );
}

export function AddToCartButton({ id }: { id: string }) {
  const setAddTocart = useSetAtom(AddToCartAtom);
  const product = useAtomValue(ProductsAtom)?.get(id);
  return (
    <button
      role="button"
      onClick={() => (product ? setAddTocart(product) : null)}
      className="w-4 aspect-square text-primary-main"
    >
      <BasketIcon />
    </button>
  );
}

export function AddToCartCTA({ id }: { id: string }) {
  const setAddTocart = useSetAtom(AddToCartAtom);
  const product = useAtomValue(ProductsAtom)?.get(id);
  const [feedback, setFeedback] = useState(false);
  const timestamp = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!feedback) return;
    timestamp.current = setTimeout(() => {
      setFeedback(false);
      timestamp.current = null;
    }, 1500);
    return () => {
      if (timestamp.current) clearTimeout(timestamp.current);
    };
  }, [feedback]);

  return (
    <button
      role="button"
      className="rounded-md bg-primary-main p-4 text-white text-2xl relative overflow-hidden"
      onClick={() => {
        if (!product) return;
        setAddTocart(product);
        setFeedback(true);
      }}
    >
      Ajouter au panier
      <span
        data-active={feedback}
        className="absolute w-[32px] aspect-square right-0 translate-x-full data-[active=true]:translate-x-0 transition-all ease-in-out"
      >
        👍
      </span>
    </button>
  );
}
