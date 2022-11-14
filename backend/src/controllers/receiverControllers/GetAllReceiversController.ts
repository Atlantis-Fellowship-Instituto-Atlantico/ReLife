import { Request, Response } from "express";
import { GetAllReceiversService } from "../../services/receiverServices/GetAllReceiversService";

export class GetAllReceiversController {
  async handle(req: Request, res: Response) {
    const service = new GetAllReceiversService();

    const users = await service.getAllReceivers();

    return res.json(users);
  }
}