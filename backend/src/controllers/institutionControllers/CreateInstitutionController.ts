import { Request, Response } from "express";
import { CreateInstitutionService } from "../../services/institutionServices/CreateInstitutionService";

export class CreateInstitutionController {
  async handle(req: Request, res: Response) {
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

    const service = new CreateInstitutionService();

    try {
      const result = await service.createInstitution(
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
      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
}
