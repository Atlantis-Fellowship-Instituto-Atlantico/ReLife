import { Request, Response } from "express";
import { DeleteInstitutionService } from "../../services/institutionServices/DeleteInstitutionService";

export class DeleteInstitutionController {
  async handle(req: Request, res: Response) {
    const { institution_id } = req.params;

    const service = new DeleteInstitutionService();

    const result = await service.delete(institution_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
