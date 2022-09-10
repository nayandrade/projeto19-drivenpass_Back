import joi from "joi";
import { userInput } from "../types/userTypes";

export const authSchema = joi.object<userInput>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});
