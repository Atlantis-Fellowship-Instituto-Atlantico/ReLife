import { Request, Response } from "express";
import { GetAllOrgansService } from "../../services/organServices/GetAllOrgansService";

export class GetAllOrgansController {
  async handle(req: Request, res: Response) {
    const service = new GetAllOrgansService();

    try {
      const organs = await service.getAllOrgans();
      return res.status(200).json(organs);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
