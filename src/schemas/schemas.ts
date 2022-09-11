import joi from "joi";
import { userInput } from "../types/userTypes";
import { credentialsBody } from "../types/credentialsTypes";
import { safeNotesInput } from "../types/safeNotesTypes";
import { cardsBody } from "../types/cardTypes";
import { wifiBody } from "../types/wifiTypes";

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

export const cardSchema = joi.object<cardsBody>({
  number: joi.string().regex(/^[0-9]{16}$/).length(16).required(),
  password: joi.string().required(),
  title: joi.string().required(),
  cardName: joi.string().required(),
  cvv: joi.string().regex(/^[0-9]{3}$/).length(3).required(),
  expirationDate: joi.string().regex(/^(0[1-9]|1[012])[- /.]([2-9])\d$/).required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid("credit", "debt", "both").required(),
});


export const wifiSchema = joi.object<wifiBody>({
  title: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});
