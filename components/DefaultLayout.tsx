// import Interstitial from './Interstitial';

import { CartDrawer } from './cart-drawer';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import s from '~/styles/holy-grail.module.css';
import { WithChildrenProps } from '~/utils/types';

export function DefaultLayout(props: WithChildrenProps<unknown>) {
  return (
    <div className={`min-h-screen ${s.holy_grail}`}>
      <Header />
      <CartDrawer />
      {/* <Interstitial /> */}
      {props.children}
      <Footer />
    </div>
  );
}
