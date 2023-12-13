import { Roboto } from 'next/font/google';

import { Footer } from '~/components/organisms/footer';
import { Header } from '~/components/organisms/header';
import '~/styles/globals.css';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export default function RootLayout({ children }: WithChildren) {
  return (
    <html lang="fr" className={`${roboto.variable}`}>
      <body className="grid grid-rows-[60px_auto_60px] min-h-screen w-full">
        <Header />
        <main className="w-full max-w-7xl bg-white flex flex-col gap-2 items-center justify-center mx-auto min-h-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
