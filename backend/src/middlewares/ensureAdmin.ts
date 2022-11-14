import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IToken {
  id: string;
  role: string;
  iat: number;
  exp: number;
}

export default function (req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401);
  }

  try {
    const token = authorization.replace("Bearer", "").trim();
    const data = verify(token, process.env.SECRET_KEY_JWT as string);
    const { role, id } = data as IToken;

    if (role === "ADMINISTRADOR") {
      return next();
    }

    return res
      .status(401)
      .json("The user does not have the necessary authorization!");
  } catch {
    return res.status(401);
  }
}
