import Cryptr from "cryptr";
import dotenv from "dotenv";

dotenv.config();

const cryptr = new Cryptr(String(process.env.CRYPTR_KEY));

export function encrypt(string: string) {
  return cryptr.encrypt(string);
}

export function decrypt(encryptedString: string) {
  return cryptr.decrypt(encryptedString);
}
