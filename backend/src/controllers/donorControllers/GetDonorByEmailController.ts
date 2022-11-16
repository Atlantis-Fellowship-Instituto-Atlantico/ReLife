import { Request, Response } from "express";
import { GetByEmailDonorService } from "../../services/donorServices/GetByEmailDonorService";

export class GetDonorByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.params;

    const service = new GetByEmailDonorService();

    try {
      const result = await service.getDonorByEmail(email);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message)
    }

  }
}
