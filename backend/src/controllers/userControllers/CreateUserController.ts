import { Request, Response } from "express";
import { CreateUserService } from "../../services/userServices/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      role,
      address,
      name,
      last_name,
      cpf,
      phone,
      email,
      user_name,
      password,
    } = request.body;

    const userService = new CreateUserService();

    const result = await userService.execute({
      role,
      address,
      name,
      last_name,
      cpf,
      phone,
      email,
      user_name,
      password,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
