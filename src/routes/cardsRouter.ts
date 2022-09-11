import { Router } from "express";
import { createCard ,getAllCards, getCardById, deleteCard } from "../controllers/cardsControllers";
import jwtMiddleware from "../middlewares/jwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { cardSchema } from "../schemas/schemas";

const cardsRouter = Router();

cardsRouter.post("/cards", validateSchemaMiddleware(cardSchema), jwtMiddleware, createCard);
cardsRouter.get("/cards", jwtMiddleware, getAllCards);
cardsRouter.get("/cards/:id", jwtMiddleware, getCardById);
cardsRouter.delete("/cards/:id", jwtMiddleware, deleteCard);

export default cardsRouter;