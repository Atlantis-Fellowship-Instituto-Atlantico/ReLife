import { Request, Response } from "express";
import { GetByIdUserService } from "../../services/userServices/GetByIdUserService";

export class GetUserByIdController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const service = new GetByIdUserService();

    const result = await service.getUserById(user_id);
    return res.status(200).json(result);

  }
}
