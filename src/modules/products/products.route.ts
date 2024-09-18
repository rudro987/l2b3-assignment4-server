import { Router } from "express";
import { ProductControllers } from "./products.controller";
import validateRequest from "../../middleWares/validateRequest";
import { productValidationSchema, updateProductValidationSchema } from "./products.validation";

const router = Router();

router.post('/create-product', validateRequest(productValidationSchema), ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts);

router.get('/:id',ProductControllers.getSingleProduct);

router.patch('/:id', validateRequest(updateProductValidationSchema),ProductControllers.updateSingleProduct);

router.delete('/:id',ProductControllers.deleteProduct);

export const ProductRoutes = router;