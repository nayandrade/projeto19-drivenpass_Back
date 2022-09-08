import * as authRepository from "../repositories/authRepository";
import { userInput } from "../types/userTypes";

export async function createtUser(user: userInput) {
  const hasUser = await findUser(user.email);
  if (hasUser) {
    throw {
      code: "conflict",
      message: "User already registered, please login to continue",
    };
  }
  await authRepository.create(user);
}

export async function connectUser(user: userInput) {
  //const user = await authRepository.connectUser(user);
}

async function findUser(email: string) {
  const user = await authRepository.findUser(email);
  return user;
}
