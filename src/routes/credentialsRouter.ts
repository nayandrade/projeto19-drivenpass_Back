import { Router } from "express";
import {
  createCredential,
  getAllCredentials,
  getCredentialById,
  deleteCredential,
} from "../controllers/credentialsControllers";
import jwtMiddleware from "../middlewares/jwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { credentialSchema } from "../schemas/schemas";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", validateSchemaMiddleware(credentialSchema), jwtMiddleware, createCredential);
credentialsRouter.get("/credentials", jwtMiddleware, getAllCredentials);
credentialsRouter.get("/credentials/:id", jwtMiddleware, getCredentialById);
credentialsRouter.delete("/credentials/:id", jwtMiddleware, deleteCredential);

export default credentialsRouter;
