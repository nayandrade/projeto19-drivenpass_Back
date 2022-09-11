import { wifiInput } from "../types/wifiTypes";
import * as wifiRepository from "../repositories/wifiRepository";
import { encrypt, decrypt } from "../utils/cryptr";

export async function create(wifi: wifiInput) {
  const hasWifi = await wifiRepository.getWifiByTitle(wifi.userId, wifi.title);
  if (hasWifi) {
    throw {
      type: "conflict",
      message:
        "Title already registered, please select another one to continue",
    };
  }
  const encryptedPassword = encrypt(wifi.password);
  const wifiData = { ...wifi, password: encryptedPassword };

  await wifiRepository.insertWifi(wifiData);
}

export async function getAll(userId: number) {
  const wifiData = await wifiRepository.getAll(userId);
  const wifi = wifiData.map((e) => {
    return { ...e, password: decrypt(e.password)};
  });
  return wifi;
}

export async function getById(userId: number, wifiId: number) {
  const wifi = await wifiRepository.getById(userId, wifiId);
  if (!wifi) {
    throw {
      type: "unprocessable_entity",
      message: "Wifi does not exists",
    };
  }
  const decryptedWifi = {
    ...wifi,
    password: decrypt(wifi.password),
  };

  return decryptedWifi;
}

export async function deleteById(userId: number, wifiId: number) {
  if (isNaN(wifiId)) {
    throw {
      type: "unprocessable_entity",
      message: "Wifi id must be a number",
    };
  }
  const userWifi = await getById(userId, wifiId);
  if (userId !== userWifi.userId) {
    throw {
      type: "unauthorized",
      message: "Wifi must belong to user",
    };
  }
  await wifiRepository.deleteById(wifiId);
}
