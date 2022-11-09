import { Request, Response } from "express";
import { GetAllOrgansService } from "../../services/organServices/GetAllOrgansService";

export class GetAllOrgansController {
  async handle(req: Request, res: Response) {
    const service = new GetAllOrgansService();

    const organs = await service.getAll();

    return res.json(organs);
  }
}
