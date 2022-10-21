import { Request, Response } from "express";
import { UpdateInstitutionService } from "../../services/institutionServices/UpdateInstitutionService";

export class UpdateInstitutionController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      address,
      institution_name,
      responsible_name,
      cnpj,
      phone,
      email,
      password,
      isActive,
    } = request.body;

    const service = new UpdateInstitutionService();

    const result = await service.execute({
      id,
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

    return response.status(200).json(result);
  }
}
