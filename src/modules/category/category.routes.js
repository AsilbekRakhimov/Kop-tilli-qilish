import { Router } from "express";
import categoryController from "./category.controller.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createCategorySchema } from "./dtos/create-category.dto.js";
import { updateCategorySchema } from "./dtos/update-category.dto.js";

const router = Router();

router.post("/", validationMiddleware(createCategorySchema),categoryController.createCategory);
router.get("/",categoryController.getCategories);
router.get("/:id",categoryController.getCategory);
router.put("/:id",validationMiddleware(updateCategorySchema), categoryController.updateCategory)


export default router;