import { useAtom, useAtomValue } from 'jotai';
import Image from 'next/image';
import { useRef } from 'react';

import { useClickOutside } from '~/hooks/useClickOutside';
import { CartAtom, IsCartOpenAtom } from '~/store';
import { formatPrice } from '~/utils/format';
import { Product } from '~/utils/types';

import { DeleteProductButton } from '../molecules/cart-button';

export function CartDrawer() {
  const [isOpen, setOpen] = useAtom(IsCartOpenAtom);
  const cart = useAtomValue(CartAtom);

  const totalPrice = cart.reduce((a, c) => c.price + a, 0);
  const cartDrawerRef = useRef(null);

  useClickOutside(cartDrawerRef, () => (isOpen ? setOpen(false) : null));

  return (
    <aside
      ref={cartDrawerRef}
      data-active={isOpen}
      className="z-10 fixed right-0 translate-x-full data-[active=true]:translate-x-0 transition-all w-[350px] bg-white h-full flex flex-col gap-4 p-4 shadow-md"
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
      <section className="h-[80%] flex flex-col gap-4 overflow-y-auto">
        {cart.map((product, index) => (
          /* 
           This is why the cart structure is NOT good. 
           This should be improved with a specific id for each cart item 
          */
          <CartItem key={`${product.id}-${index}`} product={product} />
        ))}
      </section>
      <section className="flex flex-col gap-3">
        <p className="text-xl">Prix total: {formatPrice(totalPrice)}</p>
        <button role="button" className="rounded-md bg-primary-main p-4 text-white text-xl">
          Commander
        </button>
      </section>
    </aside>
  );
}

type CartItemProp = { product: Product };

function CartItem({ product }: CartItemProp) {
  return (
    <article className="flex shadow-lg rounded-md p-4 bg-white gap-4 relative">
      <Image src={product.image} alt={product.title} width={60} height={60} />
      <section className="flex flex-col gap-1">
        <h1 className="font-bold line-clamp-2">{product.title}</h1>
        <p className="text-secondary-text">{formatPrice(product.price)}</p>
      </section>
      <div className="absolute right-2 bottom-2">
        <DeleteProductButton id={product.id} />
      </div>
    </article>
  );
}
