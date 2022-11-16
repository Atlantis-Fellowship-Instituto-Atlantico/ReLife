import { Request, Response } from "express";
import { DeleteUserService } from "../../services/userServices/DeleteUserService";

export class DeleteUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;

    const service = new DeleteUserService();

    try {
      await service.deleteUser(user_id);
      return res.status(204).end();
    } catch (error) {
      return res.status(404).send(error.message)
    }    
  }
}
