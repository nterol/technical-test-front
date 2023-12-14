'use client';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote';

import { ContentType } from '~/data/get-content';
import cover from '~/public/static/images/homepage-box-image.jpg';
import s from '~/styles/reassurance.module.css';

export function CardComponent({ content }: { content: ContentType }) {
  return (
    <section className="flex flex-col sm:flex-row w-[90%] mx-auto rounded-lg overflow-hidden border border-slate-200 my-6">
      <Image priority src={cover} alt="homebox cover" className="flex-1 w-full" />
      <div className={s.reassurance}>
        <MDXRemote {...content} />
      </div>
    </section>
  );
}
