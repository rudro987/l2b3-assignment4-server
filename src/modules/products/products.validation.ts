import { z } from 'zod'
import { Brands } from './product.constant'

export const productValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    brand: z.enum([...Brands] as [string, ...string[]]),
    price: z.number().positive('Price must be a positive number'),
    rating: z.number().positive('Rating must be a positive number'),
    quantity: z.number().positive('Quantity must be a positive number'),
    isDeleted: z.boolean().optional().default(false),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    brand: z.enum([...Brands] as [string, ...string[]]).optional(),
    price: z.number().positive('Price must be a positive number').optional(),
    rating: z.number().positive('Rating must be a positive number').optional(),
    quantity: z.number().positive('Quantity must be a positive number').optional(),
    isDeleted: z.boolean().optional(),
  }),
})
