import { Request, Response } from "express";
import { UpdateUserByInstitutionService } from "../../services/userServices/UpdateUserByInstitutionService";

export class UpdateUserByInstitutionController {
  async handle(req: Request, res: Response) {
    const { cpf } = req.params;
    const { blood_type, organs } = req.body;

    const service = new UpdateUserByInstitutionService();

    try {
      const result = await service.UpdateUserByInstitution(
        cpf,
        blood_type,
        organs
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
