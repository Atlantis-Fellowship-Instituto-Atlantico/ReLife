import { Request, Response } from "express";
import { UpdateDonorService } from "../../services/donorServices/UpdateDonorService";

export class UpdateDonorController {
  async handle(req: Request, res: Response) {
    const { donor_id } = req.params;
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

    const service = new UpdateDonorService();

    const result = await service.updateDonor(
      donor_id,
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
