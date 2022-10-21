import { Request, Response } from "express";
import { DeleteInstitutionService } from "../../services/institutionServices/DeleteInstitutionService";

export class DeleteInstitutionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new DeleteInstitutionService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end();
  }
}
