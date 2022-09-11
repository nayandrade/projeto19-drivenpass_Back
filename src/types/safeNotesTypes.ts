import { safeNotes } from "@prisma/client";

export type safeNotesInput = Omit<safeNotes, "id">;

export type safeNotesBody = Omit<safeNotes, "id" | "userId">;