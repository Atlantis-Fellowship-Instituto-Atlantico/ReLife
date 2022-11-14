import { Request, Response } from "express";
import { GetByIdUserService } from "../../services/userServices/GetByIdUserService";

export class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const service = new GetByIdUserService();

    const result = await service.getById(user_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
