import { Request, Response } from "express";
import { CreateOrganService } from "../../services/organServices/CreateOrganService";

export class CreateOrganController {
  async handle(req: Request, res: Response) {
    const { organ_type, description } = req.body;

    const service = new CreateOrganService();

    const result = await service.createUser(organ_type, description);
    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(201).json(result);
  }
}
