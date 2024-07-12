import { RequestHandler } from "express"
import productValidationSchema from "./products.validation"
import { ProductServices } from "./products.service"
import httpStatus from "http-status"

const createProduct: RequestHandler = async (req, res) => {
    try {
      const validatedData = productValidationSchema.parse(req.body)
      const result = await ProductServices.createProductsIntoDB(validatedData)
      res.status(httpStatus.OK).json({
        success: true,
        message: 'Product created successfully!',
        data: result,
      })
    } catch (error) {
      res.status(httpStatus.BAD_REQUEST).json({
        success: false,
        message: 'Product creation failed',
        error: error,
      })
    }
  }

  export const ProductControllers = {
    createProduct,
  }