import { users } from '@prisma/client'

export type userInput = Omit<users, "id">;