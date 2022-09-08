import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import * as authRepository from "../repositories/authRepository";
import { userInput } from "../types/userTypes";

dotenv.config();

export async function createtUser(user: userInput) {
  const hasUser = await findUser(user.email);
  if (hasUser) {
    throw {
      type: "conflict",
      message: "User already registered, please login to continue",
    };
  }
  await authRepository.create(user);
}

export async function connectUser(user: userInput) {
  const hasUser = await findUser(user.email);
  const id = hasUser?.id
  if (!hasUser) {
    throw {
      type: "conflict",
      message: "User not found, please create an account to continue",
    };
  }
  const token = jwt.sign({ id }, String(process.env.JWT_KEY), {
    expiresIn: process.env.TOKEN_DURATION
  })
  return token
}

async function findUser(email: string) {
  const user = await authRepository.findUser(email);
  return user;
}
