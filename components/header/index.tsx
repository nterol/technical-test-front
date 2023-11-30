import { useSetAtom } from 'jotai';
import Link from 'next/link';

import BasketIcon from '../icons/basket';

import { IsCartOpenAtom } from '~/store';

export function Header() {
  const setInter = useSetAtom(IsCartOpenAtom);

  const toggleDrawer = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setInter(true);
  };

  return (
    <header className="w-full items-center flex shrink-0  justify-between h-16 px-6 bg-primary-main text-white">
      <Link href="/" passHref>
        <h1 className="text-white text-4xl">SuperShop</h1>
      </Link>
      <button className="w-6 aspect-square" onClick={toggleDrawer} role="button">
        <BasketIcon />
      </button>
      {/* <IconButton onClick={toggleDrawer}>
              <ShoppingBasketIcon className="text-light" />
            </IconButton> */}
    </header>
  );
}
