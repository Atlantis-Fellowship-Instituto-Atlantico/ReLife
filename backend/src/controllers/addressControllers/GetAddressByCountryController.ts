import { Request, Response } from "express";
import { GetAddressByCountryService } from "../../services/addressServices/GetAddressesByCountryService";

export class GetAddressByIdController {
  async getByContry(req: Request, res: Response) {
    const addressService = new GetAddressByCountryService();

    const { country } = req.params;
    const addresses = await addressService.getByCountry(country);
    if (!addresses) {
      return res.status(400).json("Addresses does not exists");
    }
    return res.json(addresses);
  }
}
