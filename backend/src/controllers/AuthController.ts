import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";

export class AuthController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const authService = new AuthService();

    const login = await authService.login(email, password);

    if (login instanceof Error) {
      return res.status(401).send(login.message);
    }

    return res.json(login);
  }
}
