import { Router } from "express";
import createCategoriesController from "../controllers/createCategories.controller";
import listCategoriesController from "../controllers/listCategories.controller";
import listCategoriesOneController from "../controllers/listCategoriesOne.controller";
import deleteCategoriesController from "../controllers/deleteCategories.controller";
import updateCategoriesController from "../controllers/updateCategories.controller";

const router = Router();

router.post("", createCategoriesController);
router.get("", listCategoriesController);
router.get("/:id", listCategoriesOneController);
router.delete("/:id", deleteCategoriesController);
router.patch("/:id", updateCategoriesController);


export default router