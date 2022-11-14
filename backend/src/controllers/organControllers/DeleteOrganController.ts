import { Request, Response } from "express";
import { DeleteOrganService } from "../../services/organServices/DeleteOrganService";

export class DeleteOrganController {
  async handle(req: Request, res: Response) {
    const { organ_id } = req.params;

    const service = new DeleteOrganService();

    const result = await service.delete(organ_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
