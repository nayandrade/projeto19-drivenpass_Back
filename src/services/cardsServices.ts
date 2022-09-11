import { cardsInput } from "../types/cardTypes";
import * as cardsRepository from "../repositories/cardsRepository";
import { encrypt, decrypt } from "../utils/cryptr";

export async function create(card: cardsInput) {
  const hasCard = await cardsRepository.getCardByTitle(card.userId, card.title);
  if (hasCard) {
    throw {
      type: "conflict",
      message:
        "Title already registered, please select another one to continue",
    };
  }
  const encryptedPassword = encrypt(card.password);
  const encryptedCvv = encrypt(card.cvv);
  const cardData = { ...card, password: encryptedPassword, cvv: encryptedCvv };

  await cardsRepository.insertCard(cardData);
}

export async function getAll(userId: number) {
  const cardsData = await cardsRepository.getAll(userId);
  const cards = cardsData.map((e) => {
    return { ...e, password: decrypt(e.password), cvv: decrypt(e.cvv) };
  });
  return cards;
}

export async function getById(userId: number, cardId: number) {
  const card = await cardsRepository.getById(userId, cardId);
  if (!card) {
    throw {
      type: "unprocessable_entity",
      message: "Card does not exists",
    };
  }
  const decryptedCard = {
    ...card,
    password: decrypt(card.password),
    cvv: decrypt(card.cvv),
  };

  return decryptedCard;
}

export async function deleteById(userId: number, cardId: number) {
  if (isNaN(cardId)) {
    throw {
      type: "unprocessable_entity",
      message: "Card id must be a number",
    };
  }
  const userCard = await getById(userId, cardId);
  if (userId !== userCard.userId) {
    throw {
      type: "unauthorized",
      message: "Card must belong to user",
    };
  }
  await cardsRepository.deleteById(cardId);
}
