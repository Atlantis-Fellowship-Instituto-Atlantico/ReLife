import { Request, Response } from "express";
import { GetByEmailUserService } from "../../services/userServices/GetByEmailUserService";

export class GetUserByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.params;

    const service = new GetByEmailUserService();

    try {
      const result = await service.getUserByEmail(email);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
