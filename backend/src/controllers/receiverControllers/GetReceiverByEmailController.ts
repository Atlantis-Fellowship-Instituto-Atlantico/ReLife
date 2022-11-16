import { Request, Response } from "express";
import { GetByEmailReceiverService } from "../../services/receiverServices/GetByEmailReceiverService";

export class GetReceiverByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.params;

    const service = new GetByEmailReceiverService();

    try {
      const result = await service.getReceiverByEmail(email);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message)
    }  
  }
}
