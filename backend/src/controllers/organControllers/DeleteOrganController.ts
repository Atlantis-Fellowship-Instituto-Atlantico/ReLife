import { Request, Response } from "express";
import { DeleteOrganService } from "../../services/organServices/DeleteOrganService";

export class DeleteOrganController {
  async handle(req: Request, res: Response) {
    const { organ_id } = req.params;

    const service = new DeleteOrganService();

    try {
      await service.deleteOrgan(organ_id);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
