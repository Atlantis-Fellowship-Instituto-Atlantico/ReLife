import { Request, Response } from "express";
import { UpdateOrganService } from "../../services/organServices/UpdateOrganService";

export class UpdateOrganController {
  async handle(req: Request, res: Response) {
    const { organ_id } = req.params;
    const { organ_type, description } = req.body;

    const service = new UpdateOrganService();

    try {
      const result = await service.updateOrgan(organ_id, organ_type, description);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).send(error.message)
    } 
  }
}
