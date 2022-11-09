import { Request, Response } from "express";
import { GetByIdDonorService } from "../../services/donorServices/GetByIdDonorService";

export class GetDonorByIdController {
  async handle(req: Request, res: Response) {
    const { donor_id } = req.params;

    const service = new GetByIdDonorService();

    const result = await service.getById(donor_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
