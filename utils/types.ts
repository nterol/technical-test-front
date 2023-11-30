import { z } from 'zod';

import { cartSchema, productSchema } from './schema';

export type WithChildrenProps<T> = T & { children: React.ReactNode };

export type Product = z.infer<typeof productSchema>;

export type Cart = z.infer<typeof cartSchema>;
