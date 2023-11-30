import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';

import { CartAtom, IsCartOpenAtom } from '~/store';
import { formatPrice } from '~/utils/format';
import { Product } from '~/utils/types';

export function CartDrawer() {
  const [isOpen, setOpen] = useAtom(IsCartOpenAtom);
  const cart = useAtomValue(CartAtom);
  return (
    <aside
      data-active={isOpen}
      className="fixed right-0 translate-x-full data-[active=true]:translate-x-0 transition-all w-[350px] bg-white h-full flex flex-col gap-4 p-4"
    >
      <section className="flex gap-4 items-center">
        <button role="button" onClick={() => setOpen(false)}>
          &larr;
        </button>
        <h3 className="text-2xl">Mon panier</h3>
      </section>
      <section>
        <p>
          {cart.length === 0
            ? 'Votre panier est vide'
            : `Il y a ${cart.length} produit${cart.length > 1 ? 's' : ''} dans votre panier`}
        </p>
      </section>
      <section className="max-h-[80%] overflow-y-auto">
        {cart.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </section>
    </aside>
  );
}

type CartItemProp = { product: Product };

function CartItem({ product }: CartItemProp) {
  return (
    <article className="flex shadow-md rounded-sm p-2 bg-white">
      <Image src={product.image} alt={product.title} width={60} height={60} />
      <section className="flex flex-col gap-1">
        <h1 className="font-bold">{product.title}</h1>
        <p>{formatPrice(product.price)}</p>
      </section>
    </article>
  );
}
