'use client';

import { formatPrice } from '~/utils/format';

export default function DisplayPrice({ price }: { price: number }) {
  return <p className="text-secondary-text">{formatPrice(price)}</p>;
}
