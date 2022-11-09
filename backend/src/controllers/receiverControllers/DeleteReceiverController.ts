import { Request, Response } from "express";
import { DeleteReceiverService } from "../../services/receiverServices/DeleteReceiverService";

export class DeleteReceiverController {
  async handle(req: Request, res: Response) {
    const { receiver_id } = req.params;

    const service = new DeleteReceiverService();

    const result = await service.delete(receiver_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
