import { Request, Response } from "express";
import { GetByIdInstitutionService } from "../../services/institutionServices/GetByIdInstitutionService";

export class GetByIdInstitutionController {
  async handle(req: Request, res: Response) {
    const { institution_id } = req.params;

    const service = new GetByIdInstitutionService();

    try {
      const result = await service.getInstitutionById(institution_id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
