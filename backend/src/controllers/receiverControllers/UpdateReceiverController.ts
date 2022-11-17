import { Request, Response } from "express";
import { UpdateReceiverService } from "../../services/receiverServices/UpdateReceiverService";

export class UpdateReceiverController {
  async handle(req: Request, res: Response) {
    const { receiver_id } = req.params;
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
      mother_name,
    } = req.body;

    const service = new UpdateReceiverService();

    try {
      const result = await service.updateReceiver(
        receiver_id,
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
        mother_name
      );
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
