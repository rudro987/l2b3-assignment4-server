import { Router } from "express";
import { ProductControllers } from "./products.controller";

const router = Router();

router.post('/create-product', ProductControllers.createProduct);

export const ProductRoutes = router;