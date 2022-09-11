import { Router } from "express";

import jwtMiddleware from "../middlewares/jwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { cardSchema } from "../schemas/schemas";

const cardsRouter = Router();

cardsRouter.post("/cards", validateSchemaMiddleware(cardSchema), jwtMiddleware, );
cardsRouter.get("/cards", jwtMiddleware, );
cardsRouter.get("/cards/:id", jwtMiddleware, );
cardsRouter.delete("/cards/:id", jwtMiddleware, );

export default cardsRouter;