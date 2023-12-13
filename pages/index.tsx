import { GetStaticPropsResult, InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

import { CardComponent } from '~/components/molecules/card-component';
import { DefaultLayout } from '~/components/templates/default-layout';
import { getContent } from '~/utils/get-content';

type Props = {
  content: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
};

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  const content = await getContent('/content/reassurance.mdx');

  return {
    props: {
      content,
    },
  };
}

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <DefaultLayout>
      <section className="max-w-xl flex flex-col items-center gap-4">
        <h1 className="text-6xl ">SuperShop</h1>
      </section>
      {/* <CardComponent>
        <MDXRemote {...props.content} />
      </CardComponent> */}
      <Link href="/boutique" passHref className="py-2 px-4 rounded-sm shadow-sm bg-light text-black">
        La Boutique
      </Link>
    </DefaultLayout>
  );
}
