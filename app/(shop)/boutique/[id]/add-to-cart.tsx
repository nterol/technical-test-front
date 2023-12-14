'use client';

import { useSetAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import { NewAddToCart } from '~/store';

export function AddToCartCTA({ productID }: { productID: string }) {
  const addToCart = useSetAtom(NewAddToCart);

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
        addToCart({ productID });
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
