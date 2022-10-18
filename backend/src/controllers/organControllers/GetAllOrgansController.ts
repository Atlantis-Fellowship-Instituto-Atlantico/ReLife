import { Request, Response } from "express";
import { GetAllOrgansService } from "../../services/organServices/GetAllOrgansService";

export class GetAllOrgansController {
  async handle(request: Request, response: Response) {
    const service = new GetAllOrgansService();

    const organs = await service.execute();

    return response.json(organs);
  }
}
