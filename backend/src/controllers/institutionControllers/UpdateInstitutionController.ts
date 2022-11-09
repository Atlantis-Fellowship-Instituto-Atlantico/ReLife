import { Request, Response } from "express";
import { UpdateInstitutionService } from "../../services/institutionServices/UpdateInstitutionService";

export class UpdateInstitutionController {
  async handle(req: Request, res: Response) {
    const { institution_id } = req.params;
    const {
      institution_name,
      responsible_name,
      cnpj,
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

    const service = new UpdateInstitutionService();

    const result = await service.updateInstitution(
      institution_id,
      institution_name,
      responsible_name,
      cnpj,
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

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.status(200).json(result);
  }
}
