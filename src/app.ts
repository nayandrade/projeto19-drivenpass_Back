import cors from "cors";
import express, { json } from "express";
import dotenv from "dotenv";
import "express-async-errors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware";
import router from "./routes/router";
dotenv.config();


const app = express();
app.use(json());
app.use(cors());
app.use(router)

app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});