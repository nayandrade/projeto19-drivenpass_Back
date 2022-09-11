import { wifi } from '@prisma/client'

export type wifiInput = Omit<wifi, "id">;

export type wifiBody = Omit<wifi, "userId" | "id">; 
