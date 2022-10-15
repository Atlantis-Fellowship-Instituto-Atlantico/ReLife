import { Request, Response } from "express";
import { UpdateAddressService } from "../../services/addressServices/UpdateAddressService";

export class UpdateAddressController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
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

    const service = new UpdateAddressService();

    const result = await service.execute({
      id,
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

    return response.status(200).json(result);
  }
}
