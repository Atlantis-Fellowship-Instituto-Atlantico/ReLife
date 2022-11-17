import { Request, Response } from "express";
import { GetByIdDonorService } from "../../services/donorServices/GetByIdDonorService";

export class GetDonorByIdController {
  async handle(req: Request, res: Response) {
    const { donor_id } = req.params;

    const service = new GetByIdDonorService();

    try {
      const result = await service.getDonorById(donor_id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
