import { credentials } from '@prisma/client'

export type credentialsInput = Omit<credentials, "id">;