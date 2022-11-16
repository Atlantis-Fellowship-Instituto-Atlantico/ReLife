import { Request, Response } from "express";
import { DeleteDonorService } from "../../services/donorServices/DeleteDonorService";

export class DeleteDonorController {
  async handle(req: Request, res: Response) {
    const { donor_id } = req.params;

    const service = new DeleteDonorService();

    try {
      await service.deleteDonor(donor_id);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).send(error.message)
    }
  }
}
