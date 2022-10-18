import { Request, Response } from "express";
import { CreateOrganService } from "../../services/organServices/CreateOrganService";

export class CreateOrganController {
  async handle(request: Request, response: Response) {
    const { organ_type, description } = request.body;

    const service = new CreateOrganService();

    const result = await service.execute({
      organ_type,
      description,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
