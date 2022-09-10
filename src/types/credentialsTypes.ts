import { credentials } from '@prisma/client'

export type credentialsInput = Omit<credentials, "id">;

export type credentialsBody = Omit<credentials, "userId" | "id">; 