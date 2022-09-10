import { Request, Response } from "express";
import * as credentialServices from "../services/credentialsServices";
import { credentials } from "@prisma/client";

export async function createCredential(req: Request, res: Response) {
  const credentialInput = req.body;
  const { id } = res.locals as { id: number };
  const credential = {
    userId: id,
    ...credentialInput,
  };
  await credentialServices.create(credential);
  res.sendStatus(201);
}

export async function getAllCredentials(req: Request, res: Response) {
  const { id } = res.locals as { id: number };
  const credencials: credentials[] = await credentialServices.getAll(id);
  res.status(200).send(credencials)
}

export async function getCredentialById(req: Request, res: Response) {
  const credentialId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  const credencials = await credentialServices.getById(id, credentialId);
  res.status(200).send(credencials)
}

export async function deleteCredential(req: Request, res: Response) {
  const credentialId = parseInt(req.params.id);
  const { id } = res.locals as { id: number };
  await credentialServices.deleteById(id, credentialId);
  res.sendStatus(200);
}
