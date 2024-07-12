import httpStatus from 'http-status';
import { TProducts } from './products.interface'
import { Products } from './products.model'
import AppError from '../../errors/AppError';

const createProductsIntoDB = async (payload: TProducts) => {
  if(await Products.isProductExists(payload.name)){
    throw new AppError(httpStatus.BAD_REQUEST, 'Product already exists');
  }
  const result = await Products.create(payload)
  return result
}

export const ProductServices = {
  createProductsIntoDB,
}
