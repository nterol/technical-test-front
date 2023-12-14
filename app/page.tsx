import Link from 'next/link';

import { CardComponent } from '~/components/molecules/card-component';
import { getContent } from '~/data/get-content';

export default async function Page() {
  const content = await getContent('/content/reassurance.mdx');
  return (
    <>
      <section className="max-w-xl flex flex-col items-center gap-4">
        <h1 className="text-6xl ">SuperShop</h1>
      </section>
      <CardComponent content={content} />

      <Link href="/boutique" className="py-2 px-4 rounded-sm shadow-sm bg-light text-black">
        La Boutique
      </Link>
    </>
  );
}
