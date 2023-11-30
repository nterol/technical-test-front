import { z } from 'zod';

/* 
 comes from : 
 import d from '@/data/products.json';
 const s = new Set();
 d.forEach(({category}) => s.add(category));
 categories = [...s.values()];
*/
export const categories = ['men clothing', 'jewelery', 'electronics', 'women clothing'] as const;

export const productSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.enum(categories),
  image: z.string(),
});

export const cartSchema = z.array(productSchema);
