import { Request, Response } from "express";
import { DeleteDonorService } from "../../services/donorServices/DeleteDonorService";

export class DeleteDonorController {
  async handle(req: Request, res: Response) {
    const { donor_id } = req.params;

    const service = new DeleteDonorService();

    const result = await service.delete(donor_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
