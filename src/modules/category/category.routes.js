import { Router } from "express";
import categoryController from "./category.controller.js";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createCategorySchema } from "./dtos/create-category.dto.js";

const router = Router();

router.post("/", validationMiddleware(createCategorySchema),categoryController.createCategory);
router.get("/",categoryController.getCategories);


export default router;