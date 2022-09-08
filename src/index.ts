import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middlewares/errorHandlerMiddleware.js";
import authRouter from "./routes/authRouter.js";

const app = express();
app.use(json());
app.use(cors());
app.use(authRouter)

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});