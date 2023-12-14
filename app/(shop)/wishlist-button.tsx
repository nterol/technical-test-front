'use client';

import { useAtomValue, useSetAtom } from 'jotai';

import { HeartIcon } from '~/components/atoms/icons/heart';
import { IsProductInNewWhishList, NewAddToWishList } from '~/store';

export function WishlistButton({ productID }: { productID: string }) {
  const isInWishlist = useAtomValue(IsProductInNewWhishList(productID));
  const toWishlist = useSetAtom(NewAddToWishList);
  return (
    <button role="button" onClick={() => toWishlist(productID)} className="w-4 aspect-square text-primary-main">
      <HeartIcon isActive={isInWishlist} />
    </button>
  );
}
