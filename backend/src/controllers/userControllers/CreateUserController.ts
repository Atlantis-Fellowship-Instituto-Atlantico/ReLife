import { Request, Response } from "express";
import { CreateUserService } from "../../services/userServices/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
    const { role, full_name, sex, cpf, phone, email, password } = req.body;

    const createService = new CreateUserService();

    try {
      const result = await createService.createUser(
        role,
        full_name,
        sex,
        cpf,
        phone,
        email,
        password
      );
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
