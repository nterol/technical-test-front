import { Footer } from '~/components/organisms/footer';
import { Header } from '~/components/organisms/header';
import s from '~/styles/holy-grail.module.css';
import { type WithChildrenProps } from '~/utils/types';

import { MainWrapper } from '../atoms/main-wrapper';
import { CartDrawer } from '../organisms/cart-drawer';

export function DefaultLayout({ children }: WithChildrenProps<unknown>) {
  return (
    <div className={`min-h-screen ${s.holy_grail}`}>
      <Header />
      <CartDrawer />
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
}
