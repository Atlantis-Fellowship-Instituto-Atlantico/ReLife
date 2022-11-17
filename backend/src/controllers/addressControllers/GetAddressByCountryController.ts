import { Request, Response } from "express";
import { GetAddressByCountryService } from "../../services/addressServices/GetAddressesByCountryService";

export class GetAddressByCountryController {
  async handle(req: Request, res: Response) {
    const { country } = req.params;

    const addressService = new GetAddressByCountryService();

    try {
      const addresses = await addressService.getAddressByCountry(country);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
