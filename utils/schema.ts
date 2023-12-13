import { z } from 'zod';

export const categories = ['men clothing', 'jewelery', 'electronics', 'women clothing'] as const;

export const whishlistSchema = z.array(z.number());

export const productSchema = z.object({
  id: z.string(),
  title: z.string(),
  price: z.number(),
  description: z.string(),
  category: z.string(),
  //z.enum(categories),
  image: z.string(),
});

export const cartSchema = z.array(productSchema);
