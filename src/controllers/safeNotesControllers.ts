import { Request, Response } from "express";
import * as safeNotesServices from "../services/safeNotesServices"
import { safeNotes } from "@prisma/client";

export async function createSafeNote(req: Request, res: Response) {
  const safeNoteInput = req.body;
  const { id } = res.locals as { id: number };
  const safeNote = {
    userId: id,
    ...safeNoteInput,
  };
  await safeNotesServices.create(safeNote);
  res.sendStatus(201);
}

export async function getAllSafeNotes(req: Request, res: Response) {
  const { id } = res.locals as { id: number };
  const safeNotes: safeNotes[] = await safeNotesServices.getAll(id);
  res.status(200).send(safeNotes);
}

export async function getSafeNoteById(req: Request, res: Response) {
  const safeNoteId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  const safeNote = await safeNotesServices.getById(id, safeNoteId);
  res.status(200).send(safeNote);
}

export async function deleteSafeNote(req: Request, res: Response) {
  const safeNoteId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  await safeNotesServices.deleteById(id, safeNoteId);
  res.sendStatus(200);
}
