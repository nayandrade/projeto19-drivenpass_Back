import { Router } from "express";
import { signup, signin } from "../controllers/authControllers";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { authSchema } from "../schemas/schemas";

const authRouter = Router();

authRouter.post("/signup", validateSchemaMiddleware(authSchema), signup);
authRouter.post("/signin", validateSchemaMiddleware(authSchema), signin);

export default authRouter;
