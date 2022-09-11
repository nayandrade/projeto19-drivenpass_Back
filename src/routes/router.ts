import { Router } from "express";
import authRouter from "./authRouter";
import credentialsRouter from "./credentialsRouter";
import safeNotesRouter from "./safeNotesRouter";
import cardsRouter from "./cardsRouter";
import wifiRouter from "./wifiRouter";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(safeNotesRouter)
router.use(cardsRouter)
router.use(wifiRouter)

export default router;
