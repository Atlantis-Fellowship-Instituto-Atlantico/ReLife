import { Request, Response } from "express";
import { GetByIdOrganService } from "../../services/organServices/GetByIdOrganService";

export class GetByIdOrganController {
  async handle(req: Request, res: Response) {
    const { organ_id } = req.params;

    const service = new GetByIdOrganService();

    const result = await service.getById(organ_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
