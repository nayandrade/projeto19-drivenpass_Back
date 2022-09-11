import { Request, Response } from "express";
import * as cardsServices from "../services/cardsServices"
import { cards } from "@prisma/client";

export async function createCard(req: Request, res: Response) {
  const cardInput = req.body;
  const { id } = res.locals as { id: number };
  const card = {
    userId: id,
    ...cardInput,
  };
  await cardsServices.create(card);
  res.sendStatus(201);
}

export async function getAllCards(req: Request, res: Response) {
  const { id } = res.locals as { id: number };
  const cards: cards[] = await cardsServices.getAll(id);
  res.status(200).send(cards)
}

export async function getCardById(req: Request, res: Response) {
  const cardId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  const card = await cardsServices.getById(id, cardId);
  res.status(200).send(card)
}

export async function deleteCard(req: Request, res: Response) {
  const cardId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  await cardsServices.deleteById(id, cardId);
  res.sendStatus(200);
}