import { Request, Response } from "express";
import { GetInstitutionsAddressByCountryService } from "../../services/addressServices/GetInstitutionsAddressByCountryService";

export class GetInstitutionsAddressByCountryController {
  async handle(req: Request, res: Response) {
    const { country } = req.params;

    const addressService = new GetInstitutionsAddressByCountryService();

    try {
      const addresses = await addressService.getInstitutionsAddressByCountry(
        country
      );
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
