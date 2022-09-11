import { prisma } from "../database";
import { cardsInput } from "../types/cardTypes";

export async function getCardByTitle(userId: number, title: string) {
  return prisma.cards.findFirst({
    where: { userId, title },
  });
}

export async function insertCard(card: cardsInput) {
  return prisma.cards.create({
    data: { ...card },
  });
}

export async function getAll(userId: number) {
  return prisma.cards.findMany({
    where: { userId },
  });
}

export async function getById(userId: number, cardId: number) {
  return prisma.cards.findFirst({
    where: {
      userId,
      id: cardId,
    },
  });
}

export async function deleteById(id: number) {
  return prisma.cards.delete({ where: { id } });
}
