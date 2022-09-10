import { Router } from "express";
import {
  createCredential,
  getAllCredentials,
  getCredentialById,
  deleteCredential,
} from "../controllers/credentialsControllers";
import jwtMiddleware from "../middlewares/jwtMiddleware";

const credentialsRouter = Router();

credentialsRouter.post("/credentials", jwtMiddleware, createCredential);
credentialsRouter.get("/credentials", jwtMiddleware, getAllCredentials);
credentialsRouter.get("/credentials/:id", jwtMiddleware, getCredentialById);
credentialsRouter.delete("/credentials/:id", jwtMiddleware, deleteCredential);

export default credentialsRouter;
