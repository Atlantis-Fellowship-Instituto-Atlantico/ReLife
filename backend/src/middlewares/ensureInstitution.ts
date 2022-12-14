import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IToken {
  id: string;
  role: string;
  email: string;
  iat: number;
  exp: number;
}

export default function (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json("Unauthorized");
  }

  try {
    const token = authorization.replace("Bearer", "").trim();
    const data = verify(token, process.env.SECRET_KEY_JWT as string);
    const { role, id, email } = data as IToken;

    if (role === "INSTITUTION") {
      return next();
    }

    return res.status(403).json("Does not have necessary authorization");
  } catch (error) {
    return res.status(401).send(error.message);
  }
}
