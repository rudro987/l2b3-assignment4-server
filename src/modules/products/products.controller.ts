import { ProductServices } from "./products.service"
import httpStatus from "http-status"
import catchAsync from "../../utils/catchAsync"

const createProduct = catchAsync(async (req, res) => {
      const result = await ProductServices.createProductsIntoDB(req.body);
      res.status(httpStatus.OK).json({
        success: true,
        message: 'Product created successfully!',
        data: result,
      })
})

const getAllProducts = catchAsync(async (req, res) => {
    const result = await ProductServices.getAllProductsFromDB();
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    })
  })

  const getSingleProduct = catchAsync(async (req, res) => {
    const {id} = req.params;
    const result = await ProductServices.getSingleProductFromDB(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product fetched successfully!',
      data: result,
    })
  })

  const updateSingleProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.updateProductIntoDB(id, req.body);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product Updated successfully!',
      data: result,
    })
  });

  const deleteProduct = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ProductServices.deleteStudentFromDB(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Product deleted successfully!',
      data: result,
    })
  });

  export const ProductControllers = {
    createProduct,
    getAllProducts,
    getSingleProduct,
    updateSingleProduct,
    deleteProduct
  }