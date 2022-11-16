import { Request, Response } from "express";
import { CreateOrganService } from "../../services/organServices/CreateOrganService";

export class CreateOrganController {
  async handle(req: Request, res: Response) {
    const { organ_type, description } = req.body;

    const service = new CreateOrganService();

    try {
      const result = await service.createOrgan(organ_type, description);
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }
}
