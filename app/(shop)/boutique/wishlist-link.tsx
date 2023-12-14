import Link from 'next/link';

import { HeartIcon } from '~/components/atoms/icons/heart';

export function WishlistLink() {
  return (
    <Link className="p-2 w-fit rounded-md bg-pink-300 flex items-center gap-1" href="/new/wishlist">
      <span className="w-4 aspect-square">
        <HeartIcon />
      </span>
      <p className="whitespace-nowrap">Mes coups de coeur</p>
    </Link>
  );
}
