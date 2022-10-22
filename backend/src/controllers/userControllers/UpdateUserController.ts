import { Request, Response } from "express";
import { UpdateUserService } from "../../services/userServices/UpdateUserService";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
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

    const service = new UpdateUserService();

    const result = await service.execute({
      id,
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

    return response.status(200).json(result);
  }
}
