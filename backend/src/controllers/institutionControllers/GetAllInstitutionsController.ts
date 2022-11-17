import { Request, Response } from "express";
import { GetAllInstitutionsService } from "../../services/institutionServices/GetAllInstitutionsService";

export class GetAllInstitutionsController {
  async handle(req: Request, res: Response) {
    const service = new GetAllInstitutionsService();

    try {
      const institutions = await service.getAllInstitutions();
      return res.status(200).json(institutions);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
