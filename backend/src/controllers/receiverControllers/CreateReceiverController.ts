import { Request, Response } from "express";
import { CreateReceiverService } from "../../services/receiverServices/CreateReceiverService";

export class CreateReceiverController {
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

    const service = new CreateReceiverService();

    const result = await service.createReceiver(
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
