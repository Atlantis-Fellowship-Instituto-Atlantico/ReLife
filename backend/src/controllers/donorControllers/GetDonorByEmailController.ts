import { Request, Response } from "express";
import { GetByEmailDonorService } from "../../services/donorServices/GetByEmailDonorService";

export class GetDonorByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.params;

    const service = new GetByEmailDonorService();

    const result = await service.getByEmail(email);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
