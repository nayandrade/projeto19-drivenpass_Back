import joi from "joi";
import { userInput } from "../types/userTypes";
import { credentialsBody } from "../types/credentialsTypes";

export const authSchema = joi.object<userInput>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});

export const credentialSchema = joi.object<credentialsBody>({
  title: joi.string().required(),
  url: joi.string().uri().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});
