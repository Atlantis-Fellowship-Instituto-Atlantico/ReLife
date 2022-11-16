import { Request, Response } from "express";
import { CreateDonorService } from "../../services/donorServices/CreateDonorService";

export class CreateDonorController {
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

    const service = new CreateDonorService();

    try {
      const result = await service.createDonor(
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
      return res.status(201).json(result)
    } catch (error) {
      return res.status(400).send(error.message)
    }
  }
}
