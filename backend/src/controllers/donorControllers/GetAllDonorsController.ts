import { Request, Response } from "express";
import { GetAllDonorsService } from "../../services/donorServices/GetAllDonorsService";

export class GetAllDonorsController {
  async handle(req: Request, res: Response) {
    const service = new GetAllDonorsService();

    const users = await service.getAllDonors();

    return res.json(users);
  }
}
