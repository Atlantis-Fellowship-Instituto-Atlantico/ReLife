import { Request, Response } from "express";
import { GetByEmailUserService } from "../../services/userServices/GetByEmailUserService";

export class GetUserByEmailController {
  async handle(req: Request, res: Response) {
    const { email } = req.params;

    const service = new GetByEmailUserService();

    const result = await service.getByEmail(email);

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
