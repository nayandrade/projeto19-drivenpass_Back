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

export async function getAll(userId: number) {
  return prisma.credentials.findMany({
    where: { userId },
  });
}

export async function getById(userId: number, credencialId: number) {
  return prisma.credentials.findFirst({
    where: {
      userId,
      id: credencialId,
    },
  });
}

export async function deleteById(id: number) {
  return prisma.credentials.delete({ where: { id } });
}
