import { Request, Response } from "express";
import { GetAllDonorsService } from "../../services/donorServices/GetAllDonorsService";

export class GetAllDonorsController {
  async handle(req: Request, res: Response) {
    const service = new GetAllDonorsService();
    try {
      const users = await service.getAllDonors();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
