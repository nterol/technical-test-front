import Link from 'next/link';

import { DrawerToggleButton } from '../molecules/drawer-toggle-button';

export function Header() {
  return (
    <header className="w-full justify-center items-center flex px-1 shrink-0 md:px-6 bg-primary-main text-white">
      <nav className="flex w-full md:max-w-7xl justify-between ">
        <Link href="/new" passHref>
          <h1 className="text-white text-4xl">SuperShop</h1>
        </Link>
        <DrawerToggleButton />
      </nav>
    </header>
  );
}
