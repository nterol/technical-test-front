import { useAtomValue, useSetAtom } from 'jotai';

import { HeartIcon } from '~/components/atoms/icons/heart';
import { AddToWishList, IsProductInWhishList, RemoveFromWishList } from '~/store';

export function WishlistButton({ id }: { id: number }) {
  const isProductInWishList = useAtomValue(IsProductInWhishList(id));
  const addToWishList = useSetAtom(AddToWishList);
  const removeFromWishList = useSetAtom(RemoveFromWishList);

  return (
    <button
      role="button"
      onClick={() => (isProductInWishList ? removeFromWishList(id) : addToWishList(id))}
      className="w-4 aspect-square text-primary-main"
    >
      <HeartIcon isActive={isProductInWishList} />
    </button>
  );
}
