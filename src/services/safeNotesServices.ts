import { safeNotesInput } from "../types/safeNotesTypes"; 
import * as safeNotesRepository from "../repositories/safeNotesRepository"
import { encrypt, decrypt } from "../utils/cryptr";

export async function create(safeNote: safeNotesInput) {
  const hasSafeNote = await safeNotesRepository.getSafeNoteByTitle(
    safeNote.userId,
    safeNote.title
  );
  if (hasSafeNote) {
    throw {
      type: "conflict",
      message:
        "Title already registered, please select another one to continue",
    };
  }

  await safeNotesRepository.insertSafeNote(safeNote);
}

export async function getAll(userId: number) {
  const safeNotesData = await safeNotesRepository.getAll(userId);
  const safeNotes = safeNotesData.map((e) => {
    return e;
  });
  return safeNotes;
}

export async function getById(userId: number, safeNoteId: number) {
  const safeNote = await safeNotesRepository.getById(userId, safeNoteId);
  if (!safeNote) {
    throw {
      type: "unprocessable_entity",
      message: "Note does not exists",
    };
  }
  return safeNote;
}

export async function deleteById(userId: number, safeNoteId: number) {
  if (isNaN(safeNoteId)) {
    throw {
      type: "unprocessable_entity",
      message: "Note id must be a number",
    };
  }
  const userSafeNote = await getById(userId, safeNoteId);
  if (userId !== userSafeNote.userId) {
    throw {
      type: "unauthorized",
      message: "Note must belong to user",
    };
  }
  await safeNotesRepository.deleteById(safeNoteId);
}
