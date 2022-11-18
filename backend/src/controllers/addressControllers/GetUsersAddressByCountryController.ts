import { Request, Response } from "express";
import { GetUsersAddressByCountryService } from "../../services/addressServices/GetUsersAddressByCountryService";

export class GetUsersAddressByCountryController {
  async handle(req: Request, res: Response) {
    const { country } = req.params;

    const addressService = new GetUsersAddressByCountryService();

    try {
      const addresses = await addressService.getUsersAddressByCountry(country);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
