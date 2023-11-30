import { useSetAtom } from 'jotai';
import Link from 'next/link';

import { IsCartOpenAtom } from '~/store';

import BasketIcon from '../atoms/icons/basket';

export function Header() {
  const setInter = useSetAtom(IsCartOpenAtom);

  const toggleDrawer = () => {
    setInter(true);
  };

  return (
    <header className="w-full justify-center items-center flex shrink-0  px-6 bg-primary-main text-white">
      <nav className="flex w-full max-w-7xl justify-between ">
        <Link href="/" passHref>
          <h1 className="text-white text-4xl">SuperShop</h1>
        </Link>
        <button className="w-6 aspect-square" onClick={toggleDrawer} role="button">
          <BasketIcon />
        </button>
      </nav>
    </header>
  );
}
