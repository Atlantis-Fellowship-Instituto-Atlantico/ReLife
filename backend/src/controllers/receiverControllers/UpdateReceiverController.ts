import { Request, Response } from "express";
import { UpdateReceiverService } from "../../services/receiverServices/UpdateReceiverService";

export class UpdateReceiverController {
  async handle(req: Request, res: Response) {
    const { receiver_id } = req.params;
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
      mother_name,
    } = req.body;

    const service = new UpdateReceiverService();

    const result = await service.updateReceiver(
      receiver_id,
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
      mother_name
    );

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
