import { Router } from "express";
import { createCredential } from "../controllers/credentialsControllers"
import jwtMiddleware from "../middlewares/jwtMiddleware"

const credentialsRouter = Router();

credentialsRouter.post("/credentials", jwtMiddleware, createCredential);

export default credentialsRouter;