import { Request, Response } from "express";
import { CreateDonorService } from "../../services/donorServices/CreateDonorService";

export class CreateDonorController {
  async handle(req: Request, res: Response) {
    const {
      role,
      full_name,
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

    const service = new CreateDonorService();

    const result = await service.createDonor(
      role,
      full_name,
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
