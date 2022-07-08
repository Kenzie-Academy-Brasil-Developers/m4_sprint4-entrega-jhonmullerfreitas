import { Router } from "express";
import createCategoriesController from "../controllers/createCategoriesController.controller";
import listCategoriesController from "../controllers/listCategories.controller";


const router = Router();

router.post("", createCategoriesController);
router.get("", listCategoriesController);

export default router