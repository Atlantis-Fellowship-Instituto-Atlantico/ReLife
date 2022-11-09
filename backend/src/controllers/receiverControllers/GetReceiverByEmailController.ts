import { Request, Response } from "express";
import { GetByEmailReceiverService } from "../../services/receiverServices/GetByEmailReceiverService";

export class GetReceiverByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.params;

    const service = new GetByEmailReceiverService();

    const result = await service.getByEmail(email);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
