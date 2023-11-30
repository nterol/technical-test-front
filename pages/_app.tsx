import '~/styles/globals.css';
import { type AppType } from 'next/app';

import { useSyncSessionStorage } from '~/hooks/useSyncSessionStorage';
import { cartSchema } from '~/utils/schema';

const parseCart = (v: unknown) => {
  try {
    return cartSchema.parse(JSON.parse(v ?? ''));
  } catch {
    return [];
  }
};

const MyApp: AppType = ({ Component, pageProps }) => {
  useSyncSessionStorage('cart', parseCart);
  return <Component {...pageProps} />;
};

export default MyApp;
