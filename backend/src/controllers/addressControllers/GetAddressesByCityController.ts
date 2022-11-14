import { Request, Response } from "express";
import { GetAddressesByCityService } from "../../services/addressServices/GetAddressesByCityService";

export class GetAddressesByCityController {
  async getByCity(req: Request, res: Response) {
    const addressService = new GetAddressesByCityService();

    const { city } = req.params;
    const addresses = await addressService.getByCity(city);
    if (!addresses) {
      return res.status(400).json("Addresses does not exists");
    }
    return res.json(addresses);
  }
}
