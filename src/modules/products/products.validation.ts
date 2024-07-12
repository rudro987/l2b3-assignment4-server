import { z } from 'zod'
import { Brands } from './products.constant'

const productValidationSchema = z.object({
    name: z.string(),
    description: z.string(),
    image: z.string(),
    brand:z.enum(['MK', 'Ducky', 'Varmilo', 'Keychron', 'Pulsar', 'Leopold', 'Realforce', 'Lamzu']),
    price: z.number().positive('Price must be a positive number'),
    rating: z.number().positive('Rating must be a positive number'),
    quantity: z.number().positive('Quantity must be a positive number'),
    isDeleted: z.boolean().optional().default(false),
})

export default productValidationSchema
