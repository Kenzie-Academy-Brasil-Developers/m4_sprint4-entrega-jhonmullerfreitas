import { Router } from "express";
import createCategoriesController from "../controllers/createCategories.controller";
import listCategoriesController from "../controllers/listCategories.controller";


const router = Router();

router.post("", createCategoriesController);
router.get("", listCategoriesController);

export default router