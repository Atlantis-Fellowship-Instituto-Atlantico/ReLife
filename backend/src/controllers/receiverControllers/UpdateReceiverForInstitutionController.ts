import { Request, Response } from "express";
import { UpdateDonorForInstitutionService } from "../../services/donorServices/UpdateDonorForInstitutionService";
import { UpdateReceiverForInstitutionService } from "../../services/receiverServices/UpdateReceiverForInstitutionService";

export class UpdateReceiverForInstitutionController {
  async handle(req: Request, res: Response) {
    const { receiver_id } = req.params;
    const { blood_type, organs } = req.body;

    const service = new UpdateReceiverForInstitutionService();

    try {
      const result = await service.updateReceiverForInstitution(
        receiver_id,
        blood_type,
        organs
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
