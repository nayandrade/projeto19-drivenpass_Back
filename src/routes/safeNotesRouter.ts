import { Router } from "express";
import { createSafeNote, getAllSafeNotes, getSafeNoteById, deleteSafeNote } from "../controllers/safeNotesControllers";

import jwtMiddleware from "../middlewares/jwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { safeNotesSchema } from "../schemas/schemas";

const safeNotesRouter = Router();

safeNotesRouter.post("/notes", validateSchemaMiddleware(safeNotesSchema), jwtMiddleware, createSafeNote);
safeNotesRouter.get("/notes", jwtMiddleware, getAllSafeNotes);
safeNotesRouter.get("/notes/:id", jwtMiddleware, getSafeNoteById);
safeNotesRouter.delete("/notes/:id", jwtMiddleware, deleteSafeNote);

export default safeNotesRouter;