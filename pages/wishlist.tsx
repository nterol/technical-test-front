import { ProductWishList } from '~/components/product-list';
import { DefaultLayout } from '~/components/templates/default-layout';

export default function WishListPage() {
  return (
    <DefaultLayout>
      <ProductWishList />
    </DefaultLayout>
  );
}
