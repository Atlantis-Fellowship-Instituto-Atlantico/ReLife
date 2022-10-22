import { Request, Response } from "express";
import { GetAllInstitutionsService } from "../../services/institutionServices/GetAllInstitutionsService";

export class GetAllInstitutionsController {
  async handle(request: Request, response: Response) {
    const service = new GetAllInstitutionsService();

    const users = await service.execute();

    return response.json(users);
  }
}
