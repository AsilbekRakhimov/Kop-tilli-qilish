import { Router } from "express";
import { validationMiddleware } from "../../middlewares/validation.middleware.js";
import { createProductSchema } from "./dtos/create-product.dto.js";
import productController from "./product.controller.js";
import { updateProductSchema } from "./dtos/update-product.dto.js";

const router = Router()

router.post("/", validationMiddleware(createProductSchema), productController.createCategory);
router.get("/", productController.getProducts);
router.get("/:id", productController.getOneProduct);
router.delete("/:id", productController.deleteProduct);
router.put("/:id",validationMiddleware(updateProductSchema), productController.updateProduct);

export default router