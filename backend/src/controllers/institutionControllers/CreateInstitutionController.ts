import { Request, Response } from "express";
import { CreateInstitutionService } from "../../services/institutionServices/CreateInstitutionService";

export class CreateInstitutionController {
  async handle(request: Request, response: Response) {
    const {
      role,
      address,
      institution_name,
      responsible_name,
      cnpj,
      phone,
      email,
      password,
      isActive,
    } = request.body;

    const service = new CreateInstitutionService();

    const result = await service.execute({
      role,
      address,
      institution_name,
      responsible_name,
      cnpj,
      phone,
      email,
      password,
      isActive,
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
