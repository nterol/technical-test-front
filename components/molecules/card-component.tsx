import Image from 'next/image';

import cover from '~/public/static/images/homepage-box-image.jpg';
import s from '~/styles/reassurance.module.css';
import { WithChildrenProps } from '~/utils/types';

export function CardComponent({ children }: WithChildrenProps<unknown>) {
  return (
    <section className="flex flex-col sm:flex-row w-[90%] mx-auto rounded-lg overflow-hidden border border-slate-200 my-6">
      <Image priority src={cover} alt="homebox cover" className="flex-1 w-full" />
      <div className={s.reassurance}>{children}</div>
    </section>
  );
}
