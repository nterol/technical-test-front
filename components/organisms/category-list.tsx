import { useAtom } from 'jotai';
import Link from 'next/link';

import { FilterAtom } from '~/store';
import { categories } from '~/utils/schema';

import { HeartIcon } from '../atoms/icons/heart';

export function CategoryList() {
  const [filter, setFilter] = useAtom(FilterAtom);
  return (
    <div className="flex flex-col gap-3 p-2">
      <h3 className="font-bold p-2">Category</h3>
      <ul className="flex flex-col gap-4">
        {categories.map((category) => (
          <li
            data-active={filter === category}
            role="button"
            onClick={() => setFilter((p) => (p === category ? null : category))}
            className="rounded-md p-2 hover:bg-slate-100 
              whitespace-nowrap text-slate-500 data-[active=true]:bg-primary-main 
              data-[active=true]:text-white"
            key={category}
          >
            {category}
          </li>
        ))}
      </ul>
      <Link className="p-2 rounded-md bg-pink-300 flex items-center gap-1" href="/wishlist">
        <span className="w-4 aspect-square">
          <HeartIcon />
        </span>
        <p className="whitespace-nowrap">Mes coups de coeur</p>
      </Link>
    </div>
  );
}
