import { Router } from "express";
import { ProductRoutes } from "../modules/products/products.route";

const router = Router();

const moduleRoutes = [
    {
        path: '/products',
        route: ProductRoutes
    }
];

moduleRoutes.forEach((routes) => {
    router.use(routes.path, routes.route);
});

export default router;