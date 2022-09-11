import joi from "joi";
import { userInput } from "../types/userTypes";
import { credentialsBody } from "../types/credentialsTypes";
import { safeNotesInput } from "../types/safeNotesTypes";

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

export const safeNotesSchema = joi.object<safeNotesInput>({
  title: joi.string().max(50).required(),
  text: joi.string().max(1000).required(),
});
