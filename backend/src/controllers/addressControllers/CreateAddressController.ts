import { Request, Response } from "express";
import { CreateAddressService } from "../../services/addressServices/CreateAddressService";

export class CreateAddressController {
  async handle(request: Request, response: Response) {
    const {
      country_name,
      uf,
      city_name,
      zip_code,
      district,
      street,
      number,
      complement,
    } = request.body;

    const service = new CreateAddressService();

    const result = await service.execute({
      country_name,
      uf,
      city_name,
      zip_code,
      district,
      street,
      number,
      complement,
    });
    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(201).json(result);
  }
}
