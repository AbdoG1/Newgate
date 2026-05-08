import { Router } from "express";
import { listProducts } from "../controllers/productControllers";
import { getCategories } from "../controllers/productControllers";
import { getProductBySlug } from "../controllers/productControllers";

const router = Router();

router.get("/", listProducts)
router.get("/categories", getCategories)
router.get("/:slug", getProductBySlug)

export default router;