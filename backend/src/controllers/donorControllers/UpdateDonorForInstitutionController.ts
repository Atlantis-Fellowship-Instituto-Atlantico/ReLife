import { Request, Response } from "express";
import { UpdateDonorForInstitutionService } from "../../services/donorServices/UpdateDonorForInstitutionService";

export class UpdateDonorForInstitutionController {
  async handle(req: Request, res: Response) {
    const { donor_id } = req.params;
    const { blood_type, organs } = req.body;

    const service = new UpdateDonorForInstitutionService();

    try {
      const result = await service.updateDonorForInstitution(
        donor_id,
        blood_type,
        organs
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
