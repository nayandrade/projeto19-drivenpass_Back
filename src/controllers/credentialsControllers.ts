import { Request, Response } from "express";

export async function createCredential(req: Request, res: Response) {
  const user = req.body;
  res.sendStatus(201);
}
