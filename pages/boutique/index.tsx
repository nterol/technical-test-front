import { CategoryList } from '~/components/organisms/category-list';
import { ProductList } from '~/components/organisms/product-list';
import { DefaultLayout } from '~/components/templates/default-layout';

export default function Boutique() {
  return (
    <DefaultLayout>
      <section>
        <h1 className="text-6xl ">SuperShop</h1>
      </section>
      <section className="flex flex-col md:flex-row py-10 gap-10 w-full">
        <CategoryList />
        <ProductList />
      </section>
    </DefaultLayout>
  );
}
