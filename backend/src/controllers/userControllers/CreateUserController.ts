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

    const createService = new CreateUserService();

    const result = await createService.createUser(
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

    if (result instanceof Error)
      return res.status(400).json("Error on create user");

    return res.status(201).json(result);
  }
}
