import { RequestHandler } from "express"
import productValidationSchema from "./products.validation"
import { ProductServices } from "./products.service"
import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"

const createProduct = catchAsync(async (req, res) => {
  const validatedData = productValidationSchema.parse(req.body)
      const result = await ProductServices.createProductsIntoDB(validatedData)
      res.status(httpStatus.OK).json({
        success: true,
        message: 'Product created successfully!',
        data: result,
      })
})

  export const ProductControllers = {
    createProduct,
  }