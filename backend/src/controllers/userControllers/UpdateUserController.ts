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

    try {
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
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
