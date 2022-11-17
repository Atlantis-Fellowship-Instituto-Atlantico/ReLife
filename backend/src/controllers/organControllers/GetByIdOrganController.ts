import { Request, Response } from "express";
import { GetByIdOrganService } from "../../services/organServices/GetByIdOrganService";

export class GetByIdOrganController {
  async handle(req: Request, res: Response) {
    const { organ_id } = req.params;

    const service = new GetByIdOrganService();

    try {
      const result = await service.getOrganById(organ_id);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
