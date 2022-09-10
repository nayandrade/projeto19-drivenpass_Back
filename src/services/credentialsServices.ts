import { credentialsInput } from "../types/credentialsTypes";
import * as credentialRepository from "../repositories/credentialsRepository";
import { encrypt, decrypt } from "../utils/cryptr";

export async function create(credential: credentialsInput) {
  const hasCredential = await credentialRepository.getCredentialByTitle(
    credential.userId,
    credential.title
  );
  if (hasCredential) {
    throw {
      type: "conflict",
      message:
        "Title already registered, please select another one to continue",
    };
  }
  const encryptedPassword = encrypt(credential.password);
  const credentialData = { ...credential, password: encryptedPassword };

  await credentialRepository.insertCredential(credentialData);
}
