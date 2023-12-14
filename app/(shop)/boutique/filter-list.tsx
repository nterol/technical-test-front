import { FilterButton } from '~/components/molecules/filter-button';

import { WishlistLink } from './wishlist-link';

export function FilterList({ categories }: { categories: string[] }) {
  return (
    <div className="flex flex-col gap-3 p-2">
      <h3 className="font-bold p-2">Category</h3>
      <ul className="flex overflow-scroll md:flex-col gap-4">
        {categories.map((category) => (
          <FilterButton key={category} category={category} />
        ))}
      </ul>
      <WishlistLink />
    </div>
  );
}
