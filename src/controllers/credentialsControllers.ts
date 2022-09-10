import { Request, Response } from "express";
import * as credentialServices from "../services/credentialsServices";

export async function createCredential(req: Request, res: Response) {
  const credentialInput = req.body;
  const { id } = res.locals as { id: number };
  console.log(id)
  const credential = {
    userId: id,
    ...credentialInput,
  };
  console.log(credential);
  await credentialServices.create(credential);
  res.sendStatus(201);
}

