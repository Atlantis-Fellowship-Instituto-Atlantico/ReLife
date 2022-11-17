import { Request, Response } from "express";
import { DeleteReceiverService } from "../../services/receiverServices/DeleteReceiverService";

export class DeleteReceiverController {
  async handle(req: Request, res: Response) {
    const { receiver_id } = req.params;

    const service = new DeleteReceiverService();

    try {
      await service.deleteReceiver(receiver_id);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
