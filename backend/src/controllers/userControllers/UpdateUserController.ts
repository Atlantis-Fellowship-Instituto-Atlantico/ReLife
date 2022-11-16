import { Request, Response } from "express";
import { UpdateUserService } from "../../services/userServices/UpdateUserService";

export class UpdateUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req.params;
    const {
      role,
      full_name,
      sex,
      cpf,
      phone,
      email,
      password,
      zip_code,
      country,
      uf,
      city,
      district,
      street,
      number,
      complement,
    } = req.body;

    const service = new UpdateUserService();

    const result = await service.updateUser(
      user_id,
      role,
      full_name,
      sex,
      cpf,
      phone,
      email,
      password,
      zip_code,
      country,
      uf,
      city,
      district,
      street,
      number,
      complement
    );

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
