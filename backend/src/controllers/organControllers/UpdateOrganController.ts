import { Request, Response } from "express";
import { UpdateOrganService } from "../../services/organServices/UpdateOrganService";

export class UpdateOrganController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { organ_type, description } = request.body;

    const service = new UpdateOrganService();

    const result = await service.execute({
      id,
      organ_type,
      description,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
