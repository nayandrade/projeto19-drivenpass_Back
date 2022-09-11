import { Request, Response } from "express";
import * as wifiServices from "../services/wifiServices"
import { wifi } from "@prisma/client";

export async function createWifi(req: Request, res: Response) {
  const wifiInput = req.body;
  const { id } = res.locals as { id: number };
  const wifi = {
    userId: id,
    ...wifiInput,
  };
  await wifiServices.create(wifi);
  res.sendStatus(201);
}

export async function getAllWifis(req: Request, res: Response) {
  const { id } = res.locals as { id: number };
  const wifi: wifi[] = await wifiServices.getAll(id);
  res.status(200).send(wifi)
}

export async function getWifiById(req: Request, res: Response) {
  const wifiId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  const wifi = await wifiServices.getById(id, wifiId);
  res.status(200).send(wifi)
}

export async function deleteWifi(req: Request, res: Response) {
  const wifiId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  await wifiServices.deleteById(id, wifiId);
  res.sendStatus(200);
}