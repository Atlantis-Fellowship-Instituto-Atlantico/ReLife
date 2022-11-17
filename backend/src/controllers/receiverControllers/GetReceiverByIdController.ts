import { Request, Response } from "express";
import { GetByIdReceiverService } from "../../services/receiverServices/GetByIdReceiverService";

export class GetReceiverByIdController {
  async handle(req: Request, res: Response) {
    const { receiver_id } = req.params;

    const service = new GetByIdReceiverService();

    try {
      const result = await service.getById(receiver_id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
