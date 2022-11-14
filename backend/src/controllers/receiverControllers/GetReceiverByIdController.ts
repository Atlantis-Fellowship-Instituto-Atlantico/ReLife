import { Request, Response } from "express";
import { GetByIdDonorService } from "../../services/donorServices/GetByIdDonorService";
import { GetByIdReceiverService } from "../../services/receiverServices/GetByIdReceiverService";

export class GetReceiverByIdController {
  async handle(req: Request, res: Response) {
    const { receiver_id } = req.params;

    const service = new GetByIdReceiverService();

    const result = await service.getById(receiver_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
