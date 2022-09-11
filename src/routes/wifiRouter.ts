import { Router } from "express";
import { createWifi, getAllWifis, getWifiById, deleteWifi } from "../controllers/wifiControllers";
import jwtMiddleware from "../middlewares/jwtMiddleware";
import { validateSchemaMiddleware } from "../middlewares/validateSchemaMiddleware";
import { wifiSchema } from "../schemas/schemas";

const wifiRouter = Router();

wifiRouter.post("/wifi", validateSchemaMiddleware(wifiSchema), jwtMiddleware, createWifi);
wifiRouter.get("/wifi", jwtMiddleware, getAllWifis);
wifiRouter.get("/wifi/:id", jwtMiddleware, getWifiById);
wifiRouter.delete("/wifi/:id", jwtMiddleware, deleteWifi);

export default wifiRouter;