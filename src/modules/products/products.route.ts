import { Router } from "express";
import { ProductControllers } from "./products.controller";
import validateRequest from "../../middleWares/validateRequest";
import productValidationSchema from "./products.validation";

const router = Router();

router.post('/create-product', validateRequest(productValidationSchema), ProductControllers.createProduct);

router.get('/', ProductControllers.getAllProducts)

export const ProductRoutes = router;