import Link from 'next/link';

import { DefaultLayout } from '~/components/templates/default-layout';

export default function Home() {
  return (
    <DefaultLayout>
      <main className="flex flex-col justify-center items-center">
        <section className="max-w-xl flex flex-col items-center gap-4">
          <h1 className="text-6xl ">SuperShop</h1>
          <h5 className="text-2xl text-center text-secondary-text font-light">
            Something short and leading about the collection below—its contents, the creator, etc. Make it short and
            sweet, but not too short so folks don&apos;t simply skip over it entirely.
          </h5>

          <Link href="/boutique" passHref className="py-2 px-4 rounded-sm shadow-sm bg-light text-black">
            La Boutique
          </Link>
        </section>
      </main>
    </DefaultLayout>
  );
}
