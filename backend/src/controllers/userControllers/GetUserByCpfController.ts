import { Request, Response } from "express";
import { GetByCpfUserService } from "../../services/userServices/GetByCpfUserService";

export class GetUserByCpfController {
  async handle(req: Request, res: Response) {
    const { cpf } = req.params;

    const service = new GetByCpfUserService();

    try {
      const result = await service.getUserByCpf(cpf);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
