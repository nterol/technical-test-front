'use client';
import { useSetAtom } from 'jotai';

import { IsCartOpenAtom } from '~/store';

import BasketIcon from '../atoms/icons/basket';

export function DrawerToggleButton() {
  const setInter = useSetAtom(IsCartOpenAtom);

  const toggleDrawer = () => {
    setInter(true);
  };
  return (
    <button className="w-6 aspect-square" onClick={toggleDrawer} role="button">
      <BasketIcon />
    </button>
  );
}
