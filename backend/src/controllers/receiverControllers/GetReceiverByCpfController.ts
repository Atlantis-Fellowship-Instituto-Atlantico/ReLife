import { Request, Response } from "express";
import { GetByCpfReceiverService } from "../../services/receiverServices/GetByCpfReceiverService";

export class GetReceiverByCpfController {
  async handle(req: Request, res: Response) {
    const { cpf } = req.params;

    const service = new GetByCpfReceiverService();

    try {
      const result = await service.getReceiverByCpf(cpf);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message)
    }
    
  }
}
