import { prisma } from "../database";
import { credentialsInput } from "../types/credentialsTypes";

export async function getCredentialByTitle(userId: number, title: string) {
  return prisma.credentials.findFirst({
    where: { userId, title },
  });
}

export async function insertCredential(credential: credentialsInput) {
  return prisma.credentials.create({
    data: { ...credential },
  });
}

