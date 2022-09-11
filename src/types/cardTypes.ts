import { cards } from '@prisma/client'

export type cardsInput = Omit<cards, "id">;

export type cardsBody = Omit<cards, "userId" | "id">; 
