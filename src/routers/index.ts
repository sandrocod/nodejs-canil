import { Router } from "express";
import * as pegeController from "../controllers/pageControllers";
import * as searchController from "../controllers/searchControllers";

const router = Router()

router.get('/', pegeController.home)
router.get('/dogs', pegeController.dogs)
router.get('/cats', pegeController.cats)
router.get('/fishes', pegeController.fishes)

router.get('/search', searchController.search)

export default router