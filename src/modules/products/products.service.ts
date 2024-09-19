import httpStatus from 'http-status'
import { TProducts } from './products.interface'
import { Products } from './products.model'
import AppError from '../../errors/AppError'
import QueryBuilder from '../../builder/QueryBuilder'

const createProductsIntoDB = async (payload: TProducts) => {
  if (await Products.isProductExists(payload.name)) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Product already exists')
  }
  const result = await Products.create(payload)
  return result
}

const getAllProductsFromDB = async (query: Record<string, unknown>) => {
  const searchableFields = ['name', 'brand']

  const productQuery = new QueryBuilder(Products.find(), query)
    .search(searchableFields)
    .filter()
    .sort()
    .paginate()
    .fields()

  const result = await productQuery.modelQuery
  return result
}

const getSingleProductFromDB = async (id: string) => {
  const result = await Products.findById(id)
  return result
}

const updateProductIntoDB = async (id: string, payload: Partial<TProducts>) => {
  const result = await Products.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  })
  return result
}

const deleteStudentFromDB = async (id: string) => {
  const deletedStudent = await Products.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  )

  if (!deletedStudent) {
    throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student')
  }

  return deletedStudent
}

export const ProductServices = {
  createProductsIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteStudentFromDB,
}
