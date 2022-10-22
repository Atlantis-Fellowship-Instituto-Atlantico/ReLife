import { Request, Response } from "express";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

export class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const repo = UsersRepositories;

    const userExist = await repo.findOne({ where: { email } });

    if (!userExist) {
      return res.status(401).json("Authentication failure");
    }

    const isValidPassword = await compare(password, userExist.password);

    if (!isValidPassword) {
      return res.status(401).json("Authentication failure");
    }

    const token = sign(
      { id: userExist.id, role: userExist.role },
      process.env.SECRET_KEY_JWT as string,
      { expiresIn: "2h" }
    );

    const user = {
      id: userExist.id,
      name: userExist.name,
    };
    return res.json({
      user,
      token,
    });
  }
}
