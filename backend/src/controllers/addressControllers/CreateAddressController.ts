import { Request, Response } from "express";
import { CreateAddressService } from "../../services/addressServices/CreateAddressService";

class CreateAddressController {
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

    const createAddressService = new CreateAddressService();

    const address = await createAddressService.execute({
      country_name,
      uf,
      city_name,
      zip_code,
      district,
      street,
      number,
      complement,
    });
    return response.json(address);
  }
}

export { CreateAddressController };
