import { Request, Response } from "express";
import { DeleteUserService } from "../../services/userServices/DeleteUserService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const service = new DeleteUserService();

    const result = await service.delete(user_id);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(204).end();
  }
}
