import { Request, Response } from "express";
import { CreateReceiverService } from "../../services/receiverServices/CreateReceiverService";

export class CreateReceiverController {
  async handle(req: Request, res: Response) {
    const {
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

    const service = new CreateReceiverService();

    try {
      const result = await service.createReceiver(
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
