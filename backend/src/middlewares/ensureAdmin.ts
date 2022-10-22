import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Role } from "../entities/Role";

interface IToken {
  id: string;
  role: Role;
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

    if (role.id == 1) {
      return next();
    }

    return res
      .status(401)
      .json("The user does not have the necessary authorization!");
  } catch {
    return res.status(401);
  }
}
