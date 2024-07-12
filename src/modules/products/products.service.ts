import { TProducts } from './products.interface'
import { Products } from './products.model'

const createProductsIntoDB = async (payload: TProducts) => {
  const result = await Products.create(payload)
  return result
}

export const ProductServices = {
  createProductsIntoDB,
}
