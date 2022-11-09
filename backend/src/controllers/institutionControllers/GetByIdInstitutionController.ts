import { Request, Response } from "express";
import { GetByIdInstitutionService } from "../../services/institutionServices/GetByIdInstitutionService";

export class GetByIdInstitutionController {
  async handle(req: Request, res: Response) {
    const { institution_id } = req.params;

    const service = new GetByIdInstitutionService();

    const result = await service.getById(institution_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
