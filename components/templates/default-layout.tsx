// import Interstitial from './Interstitial';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import s from '~/styles/holy-grail.module.css';
import { type WithChildrenProps } from '~/utils/types';

import { CartDrawer } from '../cart-drawer';

export function DefaultLayout({ children }: WithChildrenProps<unknown>) {
  return (
    <div className={`min-h-screen ${s.holy_grail}`}>
      <Header />
      <CartDrawer />
      {children}
      <Footer />
    </div>
  );
}
