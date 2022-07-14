import { Router } from "express";
import createProductsController from "../controllers/createProducts.controller";
import deleteProductsController from "../controllers/deleteProducts.controller";
import listProductsController from "../controllers/listProducts.controller";
import listProductsIdController from "../controllers/listProductsId.controller";
import listProductsOneController from "../controllers/listProductsOne.controller";
import updateProductsController from "../controllers/updateProducts.controller";


const router = Router();


router.post("", createProductsController);
router.get("", listProductsController);
router.get("/:id", listProductsOneController);
router.patch("/:id", updateProductsController);
router.delete("/:id", deleteProductsController);
router.get("/category/:id", listProductsIdController);

export default router;
