import { Request, Response } from "express";
import { DeleteOrganService } from "../../services/organServices/DeleteOrganService";

export class DeleteOrganController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteOrganService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
