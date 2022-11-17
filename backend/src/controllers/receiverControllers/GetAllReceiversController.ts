import { Request, Response } from "express";
import { GetAllReceiversService } from "../../services/receiverServices/GetAllReceiversService";

export class GetAllReceiversController {
  async handle(req: Request, res: Response) {
    const service = new GetAllReceiversService();

    try {
      const users = await service.getAllReceivers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
