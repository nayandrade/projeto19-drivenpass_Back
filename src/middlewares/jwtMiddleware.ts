import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export default async function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (!token) {
    // return res.status(401).send("Access denied. No token provided.");
    throw {
      type: "not_found",
      message: "No token provided, please login to continue",
    };
  }

  try {
    const SECRET = String(process.env.JWT_SECRET);
    const decoded = jwt.verify(token, SECRET);
    if (!decoded) {
      throw {
        type: "not_found",
        message: "No token provided, please login to continue",
      };
    }
    console.log(decoded);
    // const id = decoded.id;
    // res.locals = { id };
  } catch (error) {
    res
      .status(401)
      .json({ auth: false, message: "Failed to authenticate token." });
    return;
  }
  next();
}

