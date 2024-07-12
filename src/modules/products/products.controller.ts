import { ProductServices } from "./products.service"
import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"

const createProduct = catchAsync(async (req, res) => {
      const result = await ProductServices.createProductsIntoDB(req.body)
      res.status(httpStatus.OK).json({
        success: true,
        message: 'Product created successfully!',
        data: result,
      })
})

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductsFromDB()
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  })

  export const ProductControllers = {
    createProduct,
    getAllProducts
  }