import { Request, Response } from "express";
import { GetByIdInstitutionService } from "../../services/institutionServices/GetByIdInstitutionService";

export class GetByIdInstitutionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const service = new GetByIdInstitutionService();

    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  }
}
