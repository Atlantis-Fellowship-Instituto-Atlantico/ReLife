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
    return res.status(401).json("Token missing!");
  }

  const token = authorization.replace("Bearer", "").trim();

  try {
    const { id, role } = verify(
      token,
      process.env.SECRET_KEY_JWT as string
    ) as IToken;
    req.headers.userId = id;
    req.headers.role = role.id.toString();

    return next();
  } catch {
    return res.status(401).json("Invalid Token");
  }
}
