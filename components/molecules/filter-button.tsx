'use client';

import { useAtom } from 'jotai';

import { FilterAtom } from '~/store';

export function FilterButton({ category }: { category: string }) {
  const [filter, setFilter] = useAtom(FilterAtom);
  return (
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
  );
}
