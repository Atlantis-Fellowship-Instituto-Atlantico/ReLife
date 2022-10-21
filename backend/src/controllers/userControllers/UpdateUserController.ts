import { Request, Response } from "express";
import { UpdateOrganService } from "../../services/organServices/UpdateOrganService";
import { UpdateUserService } from "../../services/userServices/UpdateUserService";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      userRole,
      userAddress,
      name,
      last_name,
      cpf,
      phone,
      email,
      user_name,
      password,
      isActive,
    } = request.body;

    const service = new UpdateUserService();

    const result = await service.execute({
      id,
      userRole,
      userAddress,
      name,
      last_name,
      cpf,
      phone,
      email,
      user_name,
      password,
      isActive,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
