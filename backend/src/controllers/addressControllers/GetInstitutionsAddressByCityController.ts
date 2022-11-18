import { Request, Response } from "express";
import { GetInstitutionsAddressByCityService } from "../../services/addressServices/GetInstitutionsAddressByCityService";

export class GetInstitutionsAddressByCityController {
  async handle(req: Request, res: Response) {
    const { city } = req.params;

    const addressService = new GetInstitutionsAddressByCityService();

    try {
      const addresses = await addressService.getInstitutionsAddressByCity(city);
      return res.status(200).json(addresses);
    } catch (error) {
      return res.status(404).send(error.message);
    }
  }
}
