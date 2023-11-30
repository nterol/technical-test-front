import { CategoryList } from '~/components/category-list';
import { ProductList } from '~/components/product-list';
import { DefaultLayout } from '~/components/templates/default-layout';

export default function Boutique() {
  return (
    <DefaultLayout>
      <main className="w-full max-w-7xl bg-white flex flex-col gap-2 items-center py-6 mx-auto">
        <section>
          <h1 className="text-6xl ">SuperShop</h1>
        </section>
        <section className="flex flex-col md:flex-row py-10 gap-10 w-full">
          <CategoryList />
          <ProductList />
        </section>
      </main>
    </DefaultLayout>
  );
}
