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

export async function getAll(userId: number) {
  const credentialsData = await credentialRepository.getAll(userId);
  const credentials = credentialsData.map((e) => {
    return { ...e, password: decrypt(e.password) };
  });
  return credentials;
}

export async function getById(userId: number, credentialId: number) {
  const credential = await credentialRepository.getById(userId, credentialId);
  if (!credential) {
    throw {
      type: "unprocessable_entity",
      message: "Credential does not exists",
    };
  }
  const decryptedCredential = {
    ...credential,
    password: decrypt(credential.password),
  };

  return decryptedCredential;
}

export async function deleteById(userId: number, credentialId: number) {
  if (isNaN(credentialId)) {
    throw {
      type: "unprocessable_entity",
      message: "Credential id must be a number",
    };
  }
  const userCredential = await getById(userId, credentialId);
  if (userId !== userCredential.userId) {
    throw {
      type: "unauthorized",
      message: "Credential must belong to user",
    };
  }
  await credentialRepository.deleteById(credentialId);
}
