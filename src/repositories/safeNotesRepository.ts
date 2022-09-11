import { prisma } from "../database";
import { safeNotesInput } from "../types/safeNotesTypes";

export async function getSafeNoteByTitle(userId: number, title: string) {
  return prisma.safeNotes.findFirst({
    where: { userId, title },
  });
}

export async function insertSafeNote(safeNote: safeNotesInput) {
  return prisma.safeNotes.create({
    data: { ...safeNote },
  });
}

export async function getAll(userId: number) {
  return prisma.safeNotes.findMany({
    where: { userId },
  });
}

export async function getById(userId: number, safeNoteId: number) {
  return prisma.safeNotes.findFirst({
    where: {
      userId,
      id: safeNoteId,
    },
  });
}

export async function deleteById(id: number) {
  return prisma.safeNotes.delete({ where: { id } });
}
