import { Request, Response } from "express";
import { CreateUserService } from "../../services/userServices/CreateUserService";

export class CreateUserController {
  async handle(req: Request, res: Response) {
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

    const service = new CreateUserService();

    try {
      const result = await service.createUser(
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
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
