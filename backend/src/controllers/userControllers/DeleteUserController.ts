import { Request, Response } from "express";
import { DeleteOrganService } from "../../services/organServices/DeleteOrganService";
import { DeleteUserService } from "../../services/userServices/DeleteUserService";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteUserService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
