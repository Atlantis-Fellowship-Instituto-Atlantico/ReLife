import { Request, Response } from "express";
import { UpdateOrgansUserByInstitutionService } from "../../services/userServices/UpdateOrgansUserByInstitutionService";

export class UpdateOrgansUserByInstitutionController {
  async handle(req: Request, res: Response) {
    const { cpf } = req.params;
    const { organs } = req.body;

    const service = new UpdateOrgansUserByInstitutionService();

    try {
      const result = await service.UpdateOrgansUserByInstitution(cpf, organs);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
