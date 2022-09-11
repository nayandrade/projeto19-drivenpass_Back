import { prisma } from "../database";
import { wifiInput } from "../types/wifiTypes";

export async function getWifiByTitle(userId: number, title: string) {
  return prisma.wifi.findFirst({
    where: { userId, title },
  });
}

export async function insertWifi(wifi: wifiInput) {
  return prisma.wifi.create({
    data: { ...wifi },
  });
}

export async function getAll(userId: number) {
  return prisma.wifi.findMany({
    where: { userId },
  });
}

export async function getById(userId: number, wifiIf: number) {
  return prisma.wifi.findFirst({
    where: {
      userId,
      id: wifiIf,
    },
  });
}

export async function deleteById(id: number) {
  return prisma.wifi.delete({ where: { id } });
}
