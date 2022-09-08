import { Router } from "express";
import { signup } from "../controllers/authControllers";

const authRouter = Router();

authRouter.post("/signup")

export default authRouter;