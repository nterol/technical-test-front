import { categories } from '~/utils/schema';

export function CategoryList() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-bold">Category</h3>
      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}
