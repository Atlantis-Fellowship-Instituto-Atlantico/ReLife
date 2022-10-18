import { Request, Response } from "express";
import { GetByIdOrganService } from "../../services/organServices/GetByIdOrganService";

export class GetByIdOrganController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetByIdOrganService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
