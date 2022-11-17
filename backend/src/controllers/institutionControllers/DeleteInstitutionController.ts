import { Request, Response } from "express";
import { DeleteInstitutionService } from "../../services/institutionServices/DeleteInstitutionService";

export class DeleteInstitutionController {
  async handle(req: Request, res: Response) {
    const { institution_id } = req.params;

    const service = new DeleteInstitutionService();

    try {
      await service.deleteInstitution(institution_id);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
