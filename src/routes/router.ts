import { Router } from "express";
import authRouter from "./authRouter";
import credentialsRouter from "./credentialsRouter";
import safeNotesRouter from "./safeNotesRouter";
import cardsRouter from "./cardsRouter";

const router = Router();

router.use(authRouter);
router.use(credentialsRouter);
router.use(safeNotesRouter)
router.use(cardsRouter)

export default router;
