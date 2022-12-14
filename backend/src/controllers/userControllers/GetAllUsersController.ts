import { Request, Response } from "express";
import { GetAllUsersService } from "../../services/userServices/GetAllUsersService";

export class GetAllUsersController {
  async handle(req: Request, res: Response) {
    const service = new GetAllUsersService();

    try {
      const users = await service.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
