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
      password,
      isActive,
    } = request.body;

    const service = new CreateUserService();

    const result = await service.execute({
      role,
      address,
      name,
      last_name,
      cpf,
      phone,
      email,
      password,
      isActive,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
