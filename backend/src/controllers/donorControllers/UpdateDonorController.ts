import { Request, Response } from "express";
import { UpdateDonorService } from "../../services/donorServices/UpdateDonorService";

export class UpdateDonorController {
  async handle(req: Request, res: Response) {
    const { donor_id } = req.params;
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

    const service = new UpdateDonorService();

    try {
      const result = await service.updateDonor(
        donor_id,
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
      return res.status(404).send(error.message);
    }
  }
}
